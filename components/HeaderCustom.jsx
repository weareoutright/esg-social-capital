import React, {useState} from 'react'
import ESG_LOGO from "../constants/esg_logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import {CopyToClipboard} from "react-copy-to-clipboard"

const HeaderCustom = ({homePageHeader}) => {
  const [copied, setCopied] = useState(false)
  const SHARE_LINK = "https://esg-social-capital.vercel.app/"

  return (
    <div className="HeaderCustom">
        <div className="logo">
            <Link href="https://edstrategy.org/" target="_blank" rel="noreferrer" className="logo-link"><Image src={ESG_LOGO} alt="ESG LOGO"/></Link>
        </div>

        <div className={`pill ${homePageHeader === false ? "non-home-header" : ""}`}>
            <Link className="pill navPill-whiteBg" href="https://drive.google.com/file/d/1uuxbRu4V1TRfjpMrTurJ6tSoy9iYNRp_/view">DOWNLOAD FRAMEWORK RESOURCES</Link>
            <CopyToClipboard text={SHARE_LINK}
              onCopy={() => setCopied(true)}>
              <button>Share</button>
            </CopyToClipboard>
        </div>
    </div>
  )
}

export default HeaderCustom