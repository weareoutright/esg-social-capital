import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";
import { useState, useEffect } from 'react';
import PLAY from "../../constants/carousel/PlayButton.svg";

import VideoPopup from '../VideoPopup';

const Carousel = ({gallery}) => {
  const [showVideoPopup, setShowVideoPopup] = useState(false)
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const indexInArrayScope =
  ((activeIndex % gallery.length) + gallery.length) % gallery.length;

  const visibleItems = [...gallery, ...gallery].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  const [videoUrl, setVideoUrl] = useState("")

  const handleClick = (newDirection ) => {
    setActiveIndex(prevIndex => [prevIndex[0] + newDirection, newDirection]);
  };

  useEffect(() => {
    if (showVideoPopup) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'scroll';
    return () => {};
  }, [showVideoPopup]);

  return (
    <>
    <div className="main-wrapper">
      <div className="wrapper">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={(e) => {e.preventDefault(); handleClick(-1);}}
          className="carousel-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="33" viewBox="0 0 18 33" fill="none">
          <path d="M16.5 1L1 16.5L16.5 32" stroke="#D90F03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            const key = item.name
            return (
              <motion.div
                className="card"
                key={key}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return 'left';
                    } else if (item === visibleItems[1]) {
                      return 'center';
                    } else {
                      return 'right';
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              > 
                {item === visibleItems[1] ? <div onClick={(e) =>{
                  e.preventDefault();
                  setVideoUrl(item.videoUrl);
                  setShowVideoPopup(!showVideoPopup);
                  
                }} className="current-item">
                  <img src={item.headshot.node.sourceUrl} alt=""/><Image className="play-btn" src={PLAY} alt=""/>
                  <small className="first-last">{item.name}</small>
                  <small className="first-last-org">{item.affiliation}</small>
                </div> : 
                item === visibleItems[0] ? <div 
                onClick={(e) => {e.preventDefault; handleClick(-1);}}
                className="prev-and-next-item">
                  <img src={item.headshot.node.sourceUrl} alt="" />
                  </div> : 
                <div 
                onClick={(e) => {e.preventDefault; handleClick(1);}}
                className="prev-and-next-item">
                  <img src={item.headshot.node.sourceUrl} alt=""/>
                  </div>}
              </motion.div>
            );
          })}
        </AnimatePresence>
        <motion.button className="carousel-btn" whileTap={{ scale: 0.8 }} onClick={(e) => {e.preventDefault(); handleClick(1);}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="33" viewBox="0 0 18 33" fill="none">
          <path d="M1 1L16.5 16.5L1 32" stroke="#D90F03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>

    </div>
    {showVideoPopup && <VideoPopup setShowVideoPopup={setShowVideoPopup} url={videoUrl}/>}
    </>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position }) => {
    return {
      scale: position() === 'center' ? 1 : 0.7,
      x: 0,
      zIndex: zIndex[position()],
      opacity: 1,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

const zIndex = {
  left: 1,
  center: 2,
  right: 1,
};

export default Carousel;
