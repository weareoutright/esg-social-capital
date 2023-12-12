import React from 'react'
import Image from 'next/image'

import RESOURCES_FOLDER from "../../constants/resources-folder.svg"

const ResourcesHeader = () => {
  return (
    <>
    <div className="sidebar">
				<span></span>
	  </div>
			<div className='title-div'>
				<div>
				<p className="phase-pin"><Image src={RESOURCES_FOLDER} alt="" /><span className='resources-phase-title'>Cultivating Career Connections</span></p>
					<span className="resources-title">
						Additional Resources
					</span>
			  </div>
		  </div>
    </>
  )
}

export default ResourcesHeader