import React from 'react'
import ActionStep from './ActionStep'

const PhaseContent = ({phaseContent}) => {
  return (
    <div className="PhaseContent">
        {phaseContent.map((step, index) => {
            return <ActionStep 
            key={index}
            icon={step.image.node.sourceUrl}
            title={step.title}
            description={step.description}
            toolsArr={step.tools}
            stickyNotesArr={step.notes}
            />
        })}
    </div>
  )
}

export default PhaseContent