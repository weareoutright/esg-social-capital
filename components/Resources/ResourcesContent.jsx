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
          <em>The development of this microsite was made possible through the generous support of the Bill and Melinda Gates Foundation and the Siemens Foundation.</em>
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