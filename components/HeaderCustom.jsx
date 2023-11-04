import React from 'react'
import ESG_LOGO from "../constants/esg_logo.svg"
import Image from 'next/image'

const HeaderCustom = () => {
  return (
    <div className="HeaderCustom">
        <div className="logo">
            <button><Image src={ESG_LOGO} alt="ESG LOGO"/></button>
        </div>

        <div className="pill">
            <button>Resources</button>
            <button>Share</button>
        </div>
    </div>
  )
}

export default HeaderCustom