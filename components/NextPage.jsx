import React, {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NEXT_ARROW from "../constants/nextArrow.svg"
import NEXT_ARROW_DARK from "../constants/nextArrow-dark.svg"

const NextPage = ({nextPage, nextPageAnchorLink}) => {
  const [nextArrow, setNextArrow] = useState(NEXT_ARROW)

  return (
    <div className="NextPage">
      {nextPage !== null ?
      <>
      <span>Continue to {nextPage}</span>
      <Link className="pill" href={nextPageAnchorLink} alt="" onMouseEnter={() => setNextArrow(NEXT_ARROW_DARK)} onMouseLeave={() => setNextArrow(NEXT_ARROW)}><span>Next</span> <Image src={nextArrow} alt="" /></Link>
      </> : <span></span>
      }
    </div>
  )
}

export default NextPage