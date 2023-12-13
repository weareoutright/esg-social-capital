import React from 'react'
import ResourceAccordion from './ResourceAccordion'

const ResourcesContent = () => {
  return (
    <div className="ResourcesContent">
        <div className="resources-accordions">
            <ResourceAccordion />
          </div>
        <div className="resources-acknowledgement">
            <h4>Acknowledgements</h4>
          <p className="content-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <hr></hr>
        <div className="resources-contact">
            <h4>Contact</h4>
          <p className="content-justify">
          impact@edstrategy.org
          </p>
        </div>
    </div>
  )
}

export default ResourcesContent