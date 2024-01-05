import React from 'react'
import ESG_LOGO from "../constants/esg_logo.svg"
import Image from 'next/image'
import Link from 'next/link'

const HeaderCustom = ({homePageHeader}) => {
  return (
    <div className="HeaderCustom">
        <div className="logo">
            <Link href="https://edstrategy.org/" target="_blank" rel="noreferrer" className="logo-link"><Image src={ESG_LOGO} alt="ESG LOGO"/></Link>
        </div>

        <div className={`pill ${homePageHeader === false ? "non-home-header" : ""}`}>
            <button>DOWNLOAD FRAMEWORK RESOURCES</button>
            <button>Share</button>
        </div>
    </div>
  )
}

export default HeaderCustom