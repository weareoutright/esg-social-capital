import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RED_LINE_END from "../../constants/red_line_end.svg"
import MAP from "../../constants/map.svg"

const MapArea = () => {
  return (
    <div className="MapArea container-custom">
        <div className="map">
            <Image src={MAP} alt="Map of USA" priority={true}/>
        </div>
        <Image className="red-line-end" src={RED_LINE_END} alt="" />
        <div className="content-justify">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, atque tenetur perspiciatis excepturi dignissimos quam accusamus voluptates reprehenderit laboriosam, blanditiis quod, et ut numquam officia iste? At beatae facilis quaerat.
            </p>
        </div>
        <div className="learn-how">
            <Link className="pill" href="/laythefoundation" >Learn How</Link>
        </div>
        <small>Continue to Phase 1:<br />
        Lay the Foundation</small>
    </div>
  )
}

export default MapArea