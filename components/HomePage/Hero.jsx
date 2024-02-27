import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import VERT_LINE from "../../constants/vert_line.svg"

const Hero = ({WPHero}) => {
  return (
    <div className="Hero" id="hero">
        <h1>
            {WPHero.title}
        </h1>
        <h4>
          {WPHero.subtitle}
        </h4>

        <div className="hero-content">    
          {WPHero.content}
        </div>
        <div className="get-started">
            <Link className="pill" href={WPHero.callToAction.url} scroll={false}>{WPHero.callToAction.title}</Link>
            <Image className="hero-vert-line" src={VERT_LINE} alt=""/>
        </div>
    </div>
  )
}

export default Hero