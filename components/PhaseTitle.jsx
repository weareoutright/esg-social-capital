import React from 'react'
import Image from 'next/image';
import parse from "html-react-parser"

const PhaseTitle = ({headerSvg, phaseNum, phaseTitle, phaseHeaderContent, phaseHeaderImg}) => {

  return (
    <>
		<div className={`sidebar ${phaseTitle === "Lay The Foundation" ? 'laythefoundation-network' : phaseTitle === "Design The Supports" ? 'designthesupports-network' : phaseTitle === "Execute & Evaluate" ? 'execandeval-network' : {}}`} 
		>
			<span></span>
		</div>
		<div className="sidebar-filter">
			<span></span>
		</div>
		<div className="non-sidebar">
			<span></span>
		</div>
		<div className='title-div'>
			<div>
			<p className="phase-pin"><Image src={headerSvg} alt="" /><span> {phaseNum}</span></p>
				<h3>
					{phaseTitle}
				</h3>
				<p className="content-justify">
				{phaseHeaderContent.map((block) => parse(block.renderedHtml))}
				</p>
			</div>
			<div className={`phase-title-img ${phaseNum === "PHASE 2" || phaseNum === "PHASE 3" ? "wider-header-svg" : ""}`}>
				<img src={phaseHeaderImg} alt="" />
			</div>
		</div>
    </>
  )
}

export default PhaseTitle