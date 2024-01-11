import React, {useState} from 'react'
import ESG_LOGO from "../constants/esg_logo.svg"
import CULTIVATING_CONNECTIONS from "../constants/cultivating-connections-header.svg"
import HAMBURGER_MENU from "../constants/hamburger-menu-icon.svg"
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from "./MobileMenu"

const HeaderCustom = ({homePageHeader}) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
    <div className="HeaderCustom">
        <div className="logo">
            <Link href="/" className="logo-link"><Image src={CULTIVATING_CONNECTIONS} alt="ESG LOGO"/></Link>
            <button onClick={() => setShowMenu(!showMenu)} className="hamburger-menu">Menu <Image src={HAMBURGER_MENU} alt="" className="hamburger-menu-icon"/></button>
            <Link href="https://edstrategy.org/" target="_blank" rel="noreferrer" className="logo-link"><Image src={ESG_LOGO} alt="ESG LOGO"/></Link>
        </div>

        <div className={`pill ${homePageHeader === false ? "non-home-header" : ""}`}>
            <Link className="pill navPill-whiteBg download" href="https://drive.google.com/file/d/1bpgVkP7BTtr4PAXRMoeRBQCYRPxGa2qJ/view?usp=drive_link" target='_blank' rel="noreferrer">DOWNLOAD FRAMEWORK OVERVIEW</Link>
        </div>
    </div>
        {showMenu && <MobileMenu />}
    </>
  )
}

export default HeaderCustom