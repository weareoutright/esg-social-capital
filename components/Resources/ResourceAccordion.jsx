import React from 'react'
import Accordion from "react-bootstrap/Accordion"
import ResourceAccordionItem from './ResourceAccordionItem';

const ResourceAccordion = ({resourcesList}) => {
    const {section} = resourcesList;

    const handleClick = (e) => {
        e.preventDefault();
        e.target.blur();
    }

  return (
    <>
    {section.map((section) => {
      return (    <Accordion key={section.sectionLabel.split(" ").join("-")}>
        <Accordion.Item eventKey={section.sectionLabel.split(" ").join("-")} bsPrefix='accordion-item-custom'>
          <Accordion.Header as={'h4'} bsPrefix='accordion-header-custom' onClick={(e) => handleClick(e)}>{section.sectionLabel}</Accordion.Header>
          <Accordion.Body bsPrefix='accordion-body-custom'>
              {section.subsection.map((resource) => {
                  let key = resource.subsectionLabel.split(" ").join("-")
                  return <ResourceAccordionItem 
                  key={key} 
                  actionStepLinksArr={resource.resourceLinks} 
                  keyText={key} 
                  actionStep={resource.subsectionLabel}/>
              })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>)
    })}

    </>
  );
}

export default ResourceAccordion