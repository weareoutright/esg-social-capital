import React, {useState} from 'react'
import ESG_LOGO from "../constants/esg_logo.svg"
import CULTIVATING_CONNECTIONS from "../constants/cultivating-connections-header.svg"
import HAMBURGER_MENU from "../constants/hamburger-menu-icon.svg"
import CLOSE_MENU from "../constants/close-menu-icon.svg"
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from "./MobileMenu"

const HeaderCustom = ({homePageHeader, menus}) => {
  const [showMenu, setShowMenu] = useState(false)
  const {nodes: headerLogoUrls} = menus.nodes[0].menuItems
  const {label: downloadBtnText, url: frameworkOverviewDownload} = menus.nodes[1].menuItems.nodes[0]

  return (
    <>
    <div className="HeaderCustom">
        <div className="logo">
            <Link href="/" className="logo-link"><Image src={CULTIVATING_CONNECTIONS} alt="ESG LOGO" /></Link>
            <button onClick={() => setShowMenu(!showMenu)} className="hamburger-menu">{showMenu === false ? "Menu" : "Close"} 

            {showMenu === false ? <Image src={HAMBURGER_MENU} alt="" className="hamburger-menu-icon"/> : <Image src={CLOSE_MENU} alt="" className="hamburger-menu-icon"/>}
            
            </button>
            <Link href={headerLogoUrls[0].url} target="_blank" rel="noreferrer" className="logo-link"><Image src={ESG_LOGO} alt="ESG LOGO"/></Link>
        </div>

        <div className={`pill ${homePageHeader === false ? "non-home-header" : ""}`}>
            <Link className="pill navPill-whiteBg download" href={frameworkOverviewDownload}target='_blank' rel="noreferrer">{downloadBtnText}</Link>
        </div>
    </div>
        {showMenu === true ? <MobileMenu setShowMenu={setShowMenu} /> : null}
    </>
  )
}

export default HeaderCustom