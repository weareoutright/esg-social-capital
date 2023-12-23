import React, {use, useEffect, useState} from 'react'

const MeterBtn = ({phaseTitle, scroll}) => {
    return (
        <div className="MeterBtn">
            <button className={`pill navPill-whiteBg`}>
            <div className="track">
                <div className="filled" style={{ width: `${scroll+12}%`}}></div>
                <div className="text">{phaseTitle}</div>
            </div>
            </button>
        </div>
  )
}

export default MeterBtn