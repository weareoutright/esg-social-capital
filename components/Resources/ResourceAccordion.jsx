import React from 'react'
import Accordion from "react-bootstrap/Accordion"
import ResourceAccordionItem from './ResourceAccordionItem';
import { RESOURCE_INFO } from '../../constants/jsonContent/resourceInfo';
import { PHASE1_CONTENT, PHASE2_CONTENT, PHASE3_CONTENT } from '../../constants/jsonContent/phaseContent';

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
                return <ResourceAccordionItem key={resource.key} keyText={resource.key} parentPhase={resource.parentPhase} actionStepsArr={resource.actionStepsArr} />
            })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default ResourceAccordion