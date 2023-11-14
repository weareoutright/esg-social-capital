import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import VERT_LINE from "../constants/vert_line.svg"

const Hero = () => {
  return (
    <div className="Hero" id="hero">
        <h1>
            Cultivating Career<br />Connections
        </h1>
        <h4>
        A Framework for Building, Strengthening, and<br /> Mobilizing Students’ Social Capital
        </h4>
        <div className="hero-content">
            <p>Who helped you get to where you are now? How have you helped others get to where they are?</p>
            <br />
            <p>Social capital—or, simply put, “who we know”—can unlock and open doors to economic and career success for all learners. But how can schools, districts, and communities actively support students in recognizing the value of their existing relationships, expanding their connections,  and leveraging their networks to open up new educational and career opportunities?</p>

        </div>
        <div className="get-started">
            <Link className="pill" href="#whyscmatters" scroll={false}>Get Started</Link>
            <Image className="hero-vert-line" src={VERT_LINE} />
        </div>
    </div>
  )
}

export default Hero