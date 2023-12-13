import React from 'react'
import ActionStep from './ActionStep'

const PhaseContent = ({phaseContent}) => {
  return (
    <div className="PhaseContent">
        {phaseContent.map((step, index) => {
            return <ActionStep 
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            toolsArr={step.toolsArr}
            stickyNotesArr={step.stickyNotesArr}
            />
        })}
    </div>
  )
}

export default PhaseContent