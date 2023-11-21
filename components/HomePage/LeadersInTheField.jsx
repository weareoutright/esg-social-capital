import React from 'react'
import Image from 'next/image'
import INFO_AND_STATS from "../../constants/info_and_stats.svg"
import Link from 'next/link'
import CAROUSEL from "../../constants/carousel.svg"

const LeadersInTheField = () => {
  return (
    <div className="LeadersInTheField container-custom">
        <h3>
            Hear what social capital <br />means to leaders in the field
        </h3>
        <small>Click to play video</small>
        <div className="video-carousel">
            <Image src={CAROUSEL} alt=""/>
        </div>
        <small className="first-last">First Last</small>
        <small>Title or soundbyte</small>
        <div className="content-justify">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta molestias totam sapiente animi fugiat ipsa dolor numquam error quae mollitia consequuntur porro natus beatae, minus impedit quaerat? Consequuntur, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim earum sint magni modi iste error sapiente illum, quisquam, non itaque et? Animi voluptatibus veniam ratione ut adipisci delectus quidem.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam incidunt, qui nihil quidem quis doloremque fuga a dolorem quibusdam vel quod vitae dignissimos? Omnis similique asperiores corporis provident error quisquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, facilis ipsum soluta alias fuga consequatur maxime nesciunt magni libero voluptatum quo voluptates possimus impedit! Atque corrupti perspiciatis a voluptatibus alias.
            </p>
        </div>
        <div className="info-and-stats">
            <Link className="info-and-stats-img-link" href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/" target='_blank' rel='noreferrer'>
                <Image src={INFO_AND_STATS} alt="Infographic on Social Capital Stats"/>
            </Link>
        </div>
        <div className="content-justify">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta molestias totam sapiente animi fugiat ipsa dolor numquam error quae mollitia consequuntur porro natus beatae, minus impedit quaerat? Consequuntur, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim earum sint magni modi iste error sapiente illum, quisquam, non itaque et? Animi voluptatibus veniam ratione ut adipisci delectus quidem.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam incidunt, qui nihil quidem quis doloremque fuga a dolorem quibusdam vel quod vitae dignissimos? Omnis similique asperiores corporis provident error quisquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, facilis ipsum soluta alias fuga consequatur maxime nesciunt magni libero voluptatum quo voluptates possimus impedit! Atque corrupti perspiciatis a voluptatibus alias.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam incidunt, qui nihil quidem quis doloremque fuga a dolorem quibusdam vel quod vitae dignissimos? Omnis similique asperiores corporis provident error quisquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, facilis ipsum soluta alias fuga consequatur maxime nesciunt magni libero voluptatum quo voluptates possimus impedit! Atque corrupti perspiciatis a voluptatibus alias.
            </p>
        </div>
    </div>
  )
}

export default LeadersInTheField