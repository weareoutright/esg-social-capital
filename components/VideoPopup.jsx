import React from 'react'
import Image from "next/image"
import CLOSE_BTN_X from "../constants/close-btn-x.svg"
import ReactPlayer from "react-player"

const VideoPopup = ({url, setShowVideoPopup}) => {
  return (
    <div className="VideoPopup">
        <div className="video-bg"><span></span></div>
        <button onClick={() => setShowVideoPopup(false)} className="pill">CLOSE <Image src={CLOSE_BTN_X} alt=""></Image></button>
        <ReactPlayer url={url} />
    </div>
  )
}

export default VideoPopup