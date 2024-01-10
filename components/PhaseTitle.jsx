import React from 'react'
import Image from 'next/image';

const PhaseTitle = ({headerSvg, phaseNum, phaseTitle, phaseHeaderContent, phaseHeaderImg}) => {
	console.log(phaseTitle)


	const layTheFoundationNetworkStyles = {
        height: "46vh",
        top: "22%",
        right: "0",
		borderRadius: "50%",
		boxShadow: "0 0 .5em 1em #3870B5 inset",
	}

	const designTheSupportsNetworkStyles = {
        height: "46vh",
        top: "22%",
        right: "0",
		borderRadius: "50%",
		boxShadow: "0 0 .5em .15em #3870B5 inset",
	}

	const execAndEvalNetworkStyles = {
		height: "100vh",
		top: "0",
		right: "0",
		borderRadius: "0%",
	}

  return (
    <>
    <div className="sidebar" 
			style={phaseTitle === "Lay The Foundation" ? layTheFoundationNetworkStyles : phaseTitle === "Design The Supports" ? designTheSupportsNetworkStyles : phaseTitle === "Execute & Evaluate" ? execAndEvalNetworkStyles : {}}
	>
				<span></span>
	</div>
	{/* <div className="sidebar-blur"
	>
				<span></span>
	</div> */}
	<div className="sidebar-filter">
				<span></span>
	</div>
			<div className='title-div'>
				<div>
				<p className="phase-pin"><Image src={headerSvg} alt="" /><span>PHASE {phaseNum}</span></p>
					<h3>
						{phaseTitle}
					</h3>
					{phaseHeaderContent}
				</div>
				<div className={`phase-title-img ${phaseNum === 2 || phaseNum === 3 ? "wider-header-svg" : ""}`}>
					<Image src={phaseHeaderImg} alt="" />
				</div>
			</div>
    </>
  )
}

export default PhaseTitle