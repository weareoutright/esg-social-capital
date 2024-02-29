import React from 'react'
import Image from 'next/image'

import HeaderCustom from './HeaderCustom'
import FOLDED_CORNER from "../constants/phase-corner-fold.svg"

const PhaseHeader = ({menus}) => {
  return (
    <>
        <div className="layout_folded_corner"><Image src={FOLDED_CORNER} alt="" /></div>
        <HeaderCustom homePageHeader={false} menus={menus}/>
    </>
  )
}

export default PhaseHeader