import React from 'react'
import { PHASE1_CONTENT } from '../../constants/phase1content'
import ActionStep from '../ActionStep'

const PhaseOneContent = () => {
  return (
    <div className="PhaseOneContent">
        {PHASE1_CONTENT.map((step, index) => {
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

export default PhaseOneContent