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
          The development of this microsite was made possible through the generous support of the Bill and Melinda Gates Foundation and the Siemens Foundation.
          </p>
        </div>
        <hr></hr>
        <div className="resources-contact">
          <h4>Contact</h4>
          <p className="content-justify">
          If you'd like to learn more about this work, or about how ESG can support your organization or community in building students' social capital, please contact us at <strong>impact@edstrategy.org</strong>
          </p>
        </div>
    </div>
  )
}

export default ResourcesContent