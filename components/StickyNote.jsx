import React from 'react'

import GEOTAG from "../constants/phase1images/geotag-sticky-note.svg"
import Link from 'next/link'
import Image from 'next/image'


const StickyNote = ({title, location, content, learnMore}) => {
  return (
    <div className="StickyNote folded_corner">
      <h6>{title}</h6>
      <p className="location"><Image src={GEOTAG} alt=""/><span>{location}</span></p>
      <p className="content-justify">{content}</p>
      <Link className="pill" href={learnMore} target='_blank' rel="noreferrer">Learn More</Link>
    </div>
  )
}

export default StickyNote