import React from 'react'
import Accordion from "react-bootstrap/Accordion"
import ResourceAccordionItem from './ResourceAccordionItem';
import { RESOURCE_INFO } from '../../constants/jsonContent/resourceInfo';

const ResourceAccordion = ({}) => {
    const handleClick = (e) => {
        e.preventDefault();
        e.target.blur();
    }

  return (
    <>
    {RESOURCE_INFO.map((stage) => {
      return (    <Accordion key={stage.key}>
        <Accordion.Item eventKey={stage.key} bsPrefix='accordion-item-custom'>
          <Accordion.Header as={'h4'} bsPrefix='accordion-header-custom' onClick={(e) => handleClick(e)}>{stage.parentPhase}</Accordion.Header>
          <Accordion.Body bsPrefix='accordion-body-custom'>
              {stage.actionStepsArr.map((resource) => {
                  return <ResourceAccordionItem key={resource.key} actionStepLinksArr={resource.actionStepLinksArr} keyText={resource.key} actionStep={resource.actionStep}/>
              })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>)
    })}

    </>
  );
}

export default ResourceAccordion