import React from 'react'
import Image from 'next/image'
import INFO_AND_STATS from "../../constants/info_and_stats.svg"
import Link from 'next/link'
import Carousel from './Carousel'

const LeadersInTheField = () => {
  return (
    <div className="LeadersInTheField container-custom">
        <h3>
            Hear what social capital <br />means to leaders in the field
        </h3>
        <small>Click to play video</small>

        <div className="video-carousel">
            <Carousel />
        </div>
        
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
            <small>(Source: <Link href="https://www.cnbc.com/2019/12/27/how-to-get-a-job-often-comes-down-to-one-elite-personal-asset.html" target='_blank' rel="noreferrer" alt="">CNBC WORK</Link>; <Link href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/" target='_blank' rel="noreferrer" alt="">LinkedIn</Link>)</small>
        </div>
        <div className="content-justify">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta molestias totam sapiente animi fugiat ipsa dolor numquam error quae mollitia consequuntur porro natus beatae, minus impedit quaerat? Consequuntur, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim earum sint magni modi iste error sapiente illum, quisquam, non itaque et? Animi voluptatibus veniam ratione ut adipisci delectus quidem.
            </p>
            <br />
            <p>[[A VIDEO GOES HERE]]</p>
            <br />
            <p>How can communities more intentionally bring social capital to the forefront in their work to prepare students for college and career? On this website, you’ll find a framework for how to <span className="red-highlight">more purposefully integrate social capital development into pathways and help students develop the skills, confidence, and agency</span> to leverage existing relationships and build new connections in pursuit of their educational and professional aspirations.</p>
            <br />
            <p>Through generous philanthropic support, Education Strategy Group has worked with communities across the U.S. as they’ve incorporated social capital development strategies into their college and career pathways, in areas like work-based learning, college and career advising, and classroom learning. These include: </p>
        </div>
    </div>
  )
}

export default LeadersInTheField