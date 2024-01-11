import React from 'react'
import Link from "next"
import Image from 'next/image'
import HOME_BTN from "../constants/home_btn.svg"
import RESOURCES_BTN from "../constants/resources-folder.svg"

const MobileMenu = () => {
  return (
    <div className="MobileMenu">
        <Link href="/" className="pill navPill-whiteBg image-btn home-nav-btn" ><Image src={HOME_BTN} alt="Home"/></Link>

        <Link href="laythefoundation">Lay The Foundation</Link>

        <Link href="designthesupports">Design The Supports</Link>

        <Link href="executeandevaluate">Execute & Evaluate</Link>

        <Link href="resources" className="pill navPill-whiteBg image-btn"><Image src={RESOURCES_BTN} alt="Share"/></Link>
    </div>
  )
}

export default MobileMenu