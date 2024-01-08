import React from 'react'
import Accordion from "react-bootstrap/Accordion"
import Tool from '../Tool'

const ResourceAccordionItem = ({actionStepLinksArr, keyText, actionStep}) => {
  const handleClick = (e) => {
      e.preventDefault();
      e.target.blur();
  }

  return (
    <Accordion>
      <Accordion.Item key={keyText} eventKey={keyText} bsPrefix='mapped-accordion-item-custom'>
      <Accordion.Header as={'h4'} bsPrefix='mapped-accordion-header-custom'>{actionStep}</Accordion.Header>
      <Accordion.Body bsPrefix='mapped-accordion-body-custom'>
        {actionStepLinksArr.map((actionStepChild) => {
          return <Tool key={actionStepChild.key} href={actionStepChild.href} title={actionStepChild.title}/>
        })}
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>
  );
}

export default ResourceAccordionItem