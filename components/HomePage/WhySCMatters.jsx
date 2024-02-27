import React from 'react';
import Red from '../../helperFuncs/Red';
import Image from 'next/image';
import SMALL_RED_LINE from "../../constants/small_red_line.svg"

const WhySCMatters = ({WPWhySCMatters}) => {
  return (
    <div className="WhySCMatters container-custom" id="whyscmatters">
        <h2>Why Social
            <br />
        Capital Matters</h2>
        <p className="content-justify">
          Social capital—or, simply put, “who we know”—can unlock doors to new
          opportunities. When embedded within educational pathways, social capital
          tools and strategies can ensure students are better connected to key
          individuals who can help them understand their postsecondary and career
          options, prepare for the requirements and expectations of their chosen
          occupation, and begin to build a strong occupational identity.
        </p>
        <h4 className="container-custom">
            <p>
            <Red>Social capital</Red>—or, simply put, ‘who we know’—can <Red>unlock</Red> and <Red>open doors</Red> to economic and career success for all learners.
            </p>
        </h4>
        <Image className="whyscmatters-vert-line" src={SMALL_RED_LINE} alt="" />
    </div>
  )
}

export default WhySCMatters