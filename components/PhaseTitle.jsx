import React from 'react'
import Image from 'next/image';

const PhaseTitle = ({headerSvg, phaseNum, phaseTitle, phaseHeaderContent, phaseHeaderImg}) => {
  return (
    <>
    <div className="sidebar">
				<span></span>
	</div>
	{/* <div className="sidebar-filter">
				<span></span>
	</div> */}
			<div className='title-div'>
				<div>
				<p className="phase-pin"><Image src={headerSvg} alt="" /><span>PHASE {phaseNum}</span></p>
					<h3>
						{phaseTitle}
					</h3>
				{phaseHeaderContent}
				</div>
				<div className="phase1-title-img">
					<Image src={phaseHeaderImg} alt="" />
				</div>
			</div>
    </>
  )
}

export default PhaseTitle