import React from 'react'
import Image from 'next/image';

import Phase1HeaderContent from "./LayTheFoundation/Phase1HeaderContent"
// import Phase2HeaderContent from './DesignTheSupports/Phase2HeaderContent';
// import Phase3HeaderContent from "./ExecuteAndEvaluate/Phase3HeaderContent";

const PhaseTitle = ({headerSvg, phaseNum, phaseTitle, phaseHeaderContent, phaseHeaderImg}) => {
	// const phaseHeaderContents = {
	// 	1: <Phase1HeaderContent />,
	// 	2: <Phase2HeaderContent />,
	// 	3: <Phase3HeaderContent />
	//   }

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
				<Phase1HeaderContent />
				</div>
				<div className="phase1-title-img">
					<Image src={phaseHeaderImg} alt="" />
				</div>
			</div>
    </>
  )
}

export default PhaseTitle