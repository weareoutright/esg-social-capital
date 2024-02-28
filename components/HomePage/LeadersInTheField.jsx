import React from 'react'
import Carousel from './Carousel'

const LeadersInTheField = ({WPLeadersInTheField}) => {
  return (
    <div className="LeadersInTheField container-custom">
        <h3>
			{WPLeadersInTheField.title}
        </h3>
        <small>Click to play video</small>

        <Carousel gallery={WPLeadersInTheField.gallery}/>

		{WPLeadersInTheField.content}
    </div>
  )
}

export default LeadersInTheField