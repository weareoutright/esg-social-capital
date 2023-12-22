import React, {useState} from 'react'

const MeterBtn = (progress, navPillShare) => {
    const [width, setWidth] = useState("18%");

    return (
        <div className="MeterBtn">
            <button className="pill">
            <div className="track">
                <div className="filled" style={{ width }}></div>
                <div className="text">Lay The Foundation</div>
            </div>
            </button>
        </div>
  )
}

export default MeterBtn