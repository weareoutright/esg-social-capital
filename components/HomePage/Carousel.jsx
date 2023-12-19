import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image"
import { useState } from 'react';
import PLAY from "../../constants/carousel/PlayButton.svg"
import LEADER1 from "../../constants/carousel/leader1.svg"
import LEADER2 from "../../constants/carousel/leader2.svg"
import LEADER3 from "../../constants/carousel/leader3.svg"

const Carousel = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  // const items = ['🍔', '🍕', '🌭', '🍗'];
  const items = [
    {key: "leader2", img: <Image key="leader2" className="leader" src={LEADER2} alt="" />},
    {key: "leader1", img: <Image key="leader1" className="leader" src={LEADER1} alt="" />},
    {key: "leader3", img: <Image key="leader3" className="leader" src={LEADER3} alt="" />},
    {key: "leader1a", img: <Image key="leader1" className="leader" src={LEADER1} alt="" />},
    {key: "leader1b", img: <Image key="leader1" className="leader" src={LEADER1} alt="" />},
  ]
  // const items = [LEADER1, LEADER2, LEADER3, LEADER2]
  
  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;
  
  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = newDirection => {
    setActiveIndex(prevIndex => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={(e) => {e.preventDefault(); handleClick(-1);}}
          className="carousel-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="33" viewBox="0 0 18 33" fill="none">
<path d="M16.5 1L1 16.5L16.5 32" stroke="#D90F03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </motion.button>
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="card"
                key={item.key}
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
                {item === visibleItems[1] ? <div className="current-item">{item.img}<Image className="play-btn" src={PLAY} alt=""/></div> : <div className="prev-and-next-item">{item.img}</div>}
              </motion.div>
            );
          })}
        </AnimatePresence>
        <motion.button className="carousel-btn" whileTap={{ scale: 0.8 }} onClick={(e) => {e.preventDefault; handleClick(1);}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="33" viewBox="0 0 18 33" fill="none">
<path d="M1 1L16.5 16.5L1 32" stroke="#D90F03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </motion.button>
      </div>
      <small className="first-last">First Last</small>
        <small>Title or soundbyte</small>
    </div>
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
