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
    <Accordion>
      <Accordion.Item eventKey="0" bsPrefix='accordion-item-custom'>
        <Accordion.Header as={'h4'} bsPrefix='accordion-header-custom' onClick={(e) => handleClick(e)}>Why Social Capital Matters</Accordion.Header>
        <Accordion.Body bsPrefix='accordion-body-custom'>
            {RESOURCE_INFO.map((resource) => {
                return <ResourceAccordionItem key={resource.key} parentPhase={resource.parentPhase} actionStepsArr={resource.actionStepsArr} />
            })}
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default ResourceAccordion