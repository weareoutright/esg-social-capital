import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RED_LINE_END from "../../constants/red_line_end.svg"
import MAP from "../../constants/map.svg"
import RED_ARROW from "../../constants/redArrow.svg"

const MapArea = () => {
  return (
    <div className="MapArea container-custom">
        <div className="map">
            <Image src={MAP} alt="Map of USA" priority={true}/>
        </div>
        <Image className="red-line-end" src={RED_LINE_END} alt="" />
        <div className="content-justify">
            <p>
            Through two years of work with these ten different communities, Education Strategy Group has gained valuable insight into how educational and community leaders can take action to make social capital access, development, and activation more equitable for their students.
            </p>
        </div>
        <div className="learn-how">
            <small>Continue to Phase 1: Lay the Foundation</small>
            <Link className="pill" href="/laythefoundation" alt=""><span>Learn How</span> <Image src={RED_ARROW} alt="" /></Link>
        </div>
    </div>
  )
}

export default MapArea