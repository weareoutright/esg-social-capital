import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NEXT_ARROW from "../constants/nextArrow.svg"

const NextPage = ({nextPage, nextPageAnchorLink}) => {
  return (
    <div className="NextPage">
      <span>Continue to {nextPage}</span>
      <Link className="pill" href={nextPageAnchorLink} alt=""><span>Next</span> <Image src={NEXT_ARROW} alt="" /></Link>
    </div>
  )
}

export default NextPage