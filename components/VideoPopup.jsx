import React from 'react'
import Image from "next/image"
import CLOSE_BTN_X from "../constants/close-btn-x.svg"
import ReactPlayer from "react-player"

const VideoPopup = ({url, setShowVideoPopup}) => {
  return (
    <div className="VideoPopup">
        <div onClick={() => setShowVideoPopup(false)}  className="video-bg"><span> </span></div>
        <div className="video-player">
            <button onClick={() => setShowVideoPopup(false)} className="pill ">CLOSE <Image className="close-btn-x" src={CLOSE_BTN_X} alt=""></Image></button>
            <ReactPlayer 
            				width='125%'
                    height='125%'
                    controls={true}
            url={url} />
        </div>
    </div>
  )
}

export default VideoPopup