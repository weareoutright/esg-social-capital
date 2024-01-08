import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PAPERCLIP from "../constants/paper-clip.svg"
import CopiedPopup from './CopiedPopup'

const Tool = ({href, title}) => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }, [])

  return (
    <>
    <Link className="Tool" href={href} alt="" target="_blank" rel="noreferrer">
        <Image src={PAPERCLIP} alt="" />
        <span onClick={() => {
          setShowPopup(true);     
          setTimeout(() => {
      setShowPopup(false);
    }, 7000);}}
    >{title}</span>
    </Link>
    {showPopup && <CopiedPopup />}
    </>
  )
}

export default Tool