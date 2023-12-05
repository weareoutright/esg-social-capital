import React from 'react'
import Image from 'next/image'
import Tool from './Tool'
import StickyNote from './StickyNote'

const ActionStep = ({icon, title, description, toolsArr, stickyNotesArr}) => {
  return (
    <div className="ActionStep">
        <p className="action-step-title">
            <Image src={icon !== null ? icon : ""} alt=""/>
            <h5>{title}</h5>
        </p>
        <p className="content-justify">
            {description}
        </p>

        <div className="tools">
        <span>Tools</span>
        {toolsArr.map((tool) => {
            return <Tool key={tool.key} href={tool.href} title={tool.title} />
        })}
        </div>

        {stickyNotesArr.length > 0 ? 
        <div className="stickyNotes">
        <span>Notes from the field</span>
            {stickyNotesArr.map((note) => {
            return (<StickyNote key={note.key} title={note.title} location={note.location} content={note.content} learnMoreHref={note.href} />)})}
        </div> : <div style={{visibility: "none"}}></div>}

        <hr></hr>
    </div>
  )
}

export default ActionStep