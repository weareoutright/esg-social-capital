import React from 'react'
import Image from 'next/image'
import Tool from './Tool'
import StickyNote from './StickyNote'

const ActionStep = ({icon, title, description, toolsArr, stickyNotesArr}) => {
  return (
    <div className="ActionStep">
        <div className="action-step-title">
            <Image src={icon} alt="" width={216} height={150}/>
            <h5 className='action-title'>{title}</h5>
        </div>
        <p className="content-justify">
            {description}
        </p>

        <div className="tools">
        <span>Tools</span>
        {toolsArr.map((tool, index) => {
            console.log(tool)
            return <Tool key={index} href={tool.link.url} title={tool.link.title} />
        })}
        </div>

        {stickyNotesArr !== null ? 
            <div className="stickyNotes">
            <span>Notes from the field</span>
                {stickyNotesArr.map((note, index) => {
                return (
                    <StickyNote 
                    key={index} 
                    title={note.title} 
                    location={note.location} 
                    content={note.description} 
                    learnMoreHref={note.callToAction.url} />
                )})}
            </div> : 
            <div style={{visibility: "none"}}></div>
        }

        <hr></hr>
    </div>
  )
}

export default ActionStep