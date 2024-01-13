import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import HOME_BTN from "../constants/home_btn.svg"
import RESOURCES_BTN from "../constants/resources-folder.svg"
import MOBILE_MENU_VECTOR from "../constants/mobile-menu-vector.svg"

const MobileMenu = ({setShowMenu}) => {
  return (
    <div className="MobileMenu">
      <div className="mobile-nav-links">
        <Link href="/" className="pill navPill-whiteBg image-btn home-nav-btn" onClick={() => setShowMenu(false)}><Image src={HOME_BTN} alt="Home"/><span>Home</span></Link>

        <Link href="laythefoundation" className='pill' onClick={() => setShowMenu(false)}>Lay The Foundation</Link>

        <Link href="designthesupports" className='pill' onClick={() => setShowMenu(false)}>Design The Supports</Link>

        <Link href="executeandevaluate" className='pill' onClick={() => setShowMenu(false)}>Execute & Evaluate</Link>

        <Link href="resources" className="pill navPill-whiteBg image-btn" onClick={() => setShowMenu(false)}><Image src={RESOURCES_BTN} alt="Share"/><span>Resources</span></Link>

        <Image className="mobile-menu-vector" src={MOBILE_MENU_VECTOR} alt=""></Image>
      </div>

        <Link className="pill navPill-whiteBg download" href="https://drive.google.com/file/d/1bpgVkP7BTtr4PAXRMoeRBQCYRPxGa2qJ/view?usp=drive_link" target='_blank' rel="noreferrer" onClick={() => setShowMenu(false)}>DOWNLOAD FRAMEWORK OVERVIEW</Link>

        <div className="mobile-nav-footer">
          <span></span>
        </div>
    </div>
  )
}

export default MobileMenu