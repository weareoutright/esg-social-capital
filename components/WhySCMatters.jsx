import React from 'react';
import Image from 'next/image';
import SMALL_RED_LINE from "../constants/small_red_line.svg"

const WhySCMatters = () => {
  return (
    <div className="WhySCMatters container-custom" id="whyscmatters">
        <h2>Why Social
            <br />
        Capital Matters</h2>
        <div className="content-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut magni fugit repellat laboriosam esse voluptatum ipsum voluptatem aliquid eaque soluta omnis maiores, odit beatae labore cumque perspiciatis eveniet illo asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel nihil optio corporis voluptate rem eaque natus nesciunt iusto consectetur, cum at animi? Delectus, molestias. Quisquam, facere? Sapiente, sint perspiciatis.
        </div>
        <h4 className="container-custom">
            <p>
            <span className="red-highlight">Social capital</span>—or, simply put, ‘who we know’—can <span className='red-highlight'>unlock</span> and <span className='red-highlight'>open doors</span> to economic and career success for all learners.
            </p>
        </h4>
        <Image className="whyscmatters-vert-line" src={SMALL_RED_LINE} alt="" />
    </div>
  )
}

export default WhySCMatters