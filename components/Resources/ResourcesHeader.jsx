import React from 'react'
import Image from 'next/image'

import RESOURCES_FOLDER from "../../constants/resources-folder-blue.svg"

const resourcesNetworkStyles = {
	height: "100vh",
	top: "0",
	right: "0",
	borderRadius: "0%",
	backgroundSize: "13em",
	boxShadow: "0 0 .5em .25em #3870B5 inset",
}

const ResourcesHeader = () => {
  return (
    <>
    <div className="sidebar" style={resourcesNetworkStyles}>
				<span></span>
	  </div>
	  <div className="sidebar-filter">
				<span></span>
	</div>
			<div className='title-div'>
				<div>
				<p className="phase-pin"><Image src={RESOURCES_FOLDER} alt="" /><span className='resources-phase-title'>Cultivating Connections</span></p>
					<span className="resources-title">
						Resources
					</span>
			  </div>
		  </div>
    </>
  )
}

export default ResourcesHeader