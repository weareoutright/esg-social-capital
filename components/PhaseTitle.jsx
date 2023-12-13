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
					<p className='content-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint est vel. Quis eligendi in enim sequi sint dolore est quos explicabo nemo labore, distinctio doloribus et temporibus minus! Dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis corporis distinctio aliquid minima unde perferendis? Quibusdam laboriosam error totam et aspernatur amet voluptate recusandae nesciunt, fugiat, provident nobis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus obcaecati itaque quas sit. Cum nihil ad ipsa sapiente neque alias inventore perferendis eaque minus eveniet tempore eum, hic nisi?
					</p>
					<p className='content-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint est vel. Quis eligendi in enim sequi sint dolore est quos explicabo nemo labore, distinctio doloribus et temporibus minus! Dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis corporis distinctio aliquid minima unde perferendis? Quibusdam laboriosam error totam et aspernatur amet voluptate recusandae nesciunt, fugiat, provident nobis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus obcaecati itaque quas sit. Cum nihil ad ipsa sapiente neque alias inventore perferendis eaque minus eveniet tempore eum, hic nisi?
					</p>
				</div>
				<div className="phase1-title-img">
					<Image src={phaseHeaderImg} alt="" />
				</div>
			</div>
    </>
  )
}

export default PhaseTitle