import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PAPERCLIP from "../constants/paper-clip.svg"

const Tool = ({href, title}) => {
  return (
    <Link className="Tool" href={href} alt="" target="_blank" rel="noreferrer">
        <Image src={PAPERCLIP} alt="" />
        <span>{title}</span>
    </Link>
  )
}

export default Tool