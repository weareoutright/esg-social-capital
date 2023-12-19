import React from 'react'

import GEOTAG from "../constants/phase1images/geotag-sticky-note.svg"
import Link from 'next/link'
import Image from 'next/image'


const StickyNote = ({title, location, content, learnMoreHref}) => {
  return (
    <div className="StickyNote folded_corner">
      <h6>{title}</h6>
      <p className="location"><Image src={GEOTAG} alt=""/><span className="sticky-note-location">{location}</span></p>
      <p className="content-justify">{content}</p>
      <Link className="pill" href={learnMoreHref} target='_blank' rel="noreferrer">Learn More</Link>
    </div>
  )
}

export default StickyNote