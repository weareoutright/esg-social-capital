import React from 'react'
import Accordion from "react-bootstrap/Accordion"
import Tool from '../Tool'

const ResourceAccordionItem = ({actionStepLinksArr, keyText, actionStep}) => {
  return (
    <Accordion>
      <Accordion.Item key={keyText} eventKey={keyText} bsPrefix='mapped-accordion-item-custom'>
      <Accordion.Header as={'h4'} bsPrefix='mapped-accordion-header-custom'>{actionStep}</Accordion.Header>
      <Accordion.Body bsPrefix='mapped-accordion-body-custom'>
        {actionStepLinksArr.map((actionStepChild) => {
          let key = actionStepChild.link.title.split(" ").join("-")
          return <Tool key={key} href={actionStepChild.link.url} title={actionStepChild.link.title}/>
        })}
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>
  );
}

export default ResourceAccordionItem