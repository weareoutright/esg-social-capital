import React from 'react'
import Accordion from "react-bootstrap/Accordion"
import Tool from '../Tool'

const ResourceAccordionItem = ({key, parentPhase, actionStepsArr}) => {
    const handleClick = (e) => {
        e.preventDefault();
        e.target.blur();
    }

  return (
    <>
    <Accordion defaultActiveKey={key}>
        <span className="parent-phase">{parentPhase}</span>
        {actionStepsArr.map((actionStepParent) => {        
            return (
                <Accordion.Item key={actionStepParent.key} eventKey={actionStepParent.key} bsPrefix='mapped-accordion-item-custom'>
                <Accordion.Header as={'h4'} bsPrefix='mapped-accordion-header-custom' onClick={(e) => handleClick(e)}>{actionStepParent.actionStep}</Accordion.Header>
                <Accordion.Body bsPrefix='mapped-accordion-body-custom'>
                  {actionStepParent.actionStepLinksArr.map((actionStepChild) => {
                    return <Tool key={actionStepChild.key} href={actionStepChild.href} title={actionStepChild.displayText}/>
                  })}
                </Accordion.Body>
                </Accordion.Item>
            )}
        )}
    </Accordion>
    <hr></hr>
    </>
  );
}

export default ResourceAccordionItem