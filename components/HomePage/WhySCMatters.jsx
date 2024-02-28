import React, { Fragment } from 'react';
import Image from 'next/image';
import SMALL_RED_LINE from "../../constants/small_red_line.svg"

const WhySCMatters = ({WPWhySCMatters}) => {
  return (
    <div className="WhySCMatters container-custom" id="whyscmatters">
        <h2>
          {WPWhySCMatters.title}
        </h2>

        <p className="content-justify">
          {WPWhySCMatters.content}
        </p>
        
        <Image className="whyscmatters-vert-line" src={SMALL_RED_LINE} alt="" />
    </div>
  )
}

export default WhySCMatters