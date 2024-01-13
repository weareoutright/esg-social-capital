import React from 'react'
import Red from '../../helperFuncs/Red'
import Image from 'next/image'
import INFO_AND_STATS from "../../constants/info_and_stats.svg"
import INFO_AND_STATS_TOP from "../../constants/info-and-stats-top.svg"
import INFO_AND_STATS_BOTTOM from "../../constants/info-and-stats-bottom.svg"
import ROW_PHASE_OVERVIEW_GRAPHIC from "../../constants/phase-graphic-overview.svg"
import COL_PHASE_OVERVIEW_GRAPHIC from "../../constants/col-phase-graphic-overview.svg"
import Link from 'next/link'
import Carousel from './Carousel'
import ReactPlayer from "react-player"

const LeadersInTheField = () => {
  return (
    <div className="LeadersInTheField container-custom">
        <h3>
            Hear what social capital <br />means to leaders in the field
        </h3>
        <small>Click to play video</small>

        <Carousel />
        
			<p className="content-justify">
				Expanding and mobilizing social capital is most imperative for students
				of backgrounds that have been{' '}
				<Red>
					historically underrepresented in high-wage, high-demand fields
				</Red>{' '}
				like healthcare and information technology. Research shows that weak
				ties—or one&#39;s acquaintances—are the most helpful for connecting people
				to new job opportunities  
				<Link  
                    className="inline-link"
					href="https://hbr.org/2022/12/which-connections-really-help-you-find-a-job"
					alt=""
					target="_blank"
					rel="noreferrer"
				>
				(Source: Harvard Business Review)
				</Link>
				, as the diversity and breadth of one&#39;s network increases access to
				different information, resources, and support.
			</p>

			<p className="content-justify">
				Without direct, even if loose, connections to people in industries that
				provide a family-sustaining wage, the likelihood of a person finding
				their way to these jobs diminishes. Yet, research by the{' '}
				<Link
					className="inline-link"
                    href="https://cci.stradaeducation.org/pv-release-dec-8-2021/#clarity"
					target="_blank"
					rel="noreferrer"
					alt=""
				>
					Strada Education Foundation
				</Link>{' '}
				reveals that{' '}
				<Red>
					just half of college seniors feel confident in their ability to
					network with alumni or professionals to make career connections
				</Red>
				. Untapped opportunities to build social capital in occupations or
				fields of interest can leave some students a step behind as they begin
				their careers.
			</p>
        <div className="info-and-stats">
            <Link className="info-and-stats-img-link-row" href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/" target='_blank' rel='noreferrer'>
                <Image src={INFO_AND_STATS} alt="Infographic on Social Capital Stats"/>
            </Link>

			<Link className="info-and-stats-img-link-col" href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/" target='_blank' rel='noreferrer'>
                <Image src={INFO_AND_STATS_TOP} alt="Infographic on Social Capital Stats"/>
            </Link>

			<Link className="info-and-stats-img-link-col" href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/" target='_blank' rel='noreferrer'>
                <Image src={INFO_AND_STATS_BOTTOM} alt="Infographic on Social Capital Stats"/>
            </Link>

            <small>(Source: <Link className="source-link" href="https://www.cnbc.com/2019/12/27/how-to-get-a-job-often-comes-down-to-one-elite-personal-asset.html" target='_blank' rel="noreferrer" alt="">CNBC WORK</Link>; <Link className="source-link" href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/" target='_blank' rel="noreferrer" alt="">LinkedIn</Link>)</small>
        </div>
        <div className="content-justify">
            <p>Addressing inequities in economic opportunity requires addressing network inequities — and <Red>that work must start long before a student enters the workforce</Red>. Few education systems identify social capital development as a critical component in their college and career preparation priorities despite the fact that expanding students&#39; networks and giving students the tools, confidence, and know-how to leverage their relationships can increase their access to new information, resources, and opportunities. Regrettably, this is too often left to chance. As they work to prepare students for college and career, education systems can more intentionally work to help students build and leverage their connections. 
            </p>
            <br />
			<div className="player-wrapper">
				<ReactPlayer 
				style={{
					margin: "1em auto",
					border: "1px solid #000",
				}}
				className="react-player"
				width='100%'
				height='100%'
				url="https://youtu.be/kTar7wB45gw" />
			</div>
            <br />
            <p>How can communities more intentionally bring social capital to the forefront in their work to prepare students for college and career? On this website, you&#39;ll find a framework for how to <Red>more purposefully integrate social capital development into pathways and help students develop the skills, confidence, and agency</Red> to leverage existing relationships and build new connections in pursuit of their educational and professional aspirations. The framework contains three main phases; this website offers action steps, tools and resources, and examples from the field within each phase.</p>
            
			<Link className="row-phase-overview-graphic-link" href="https://drive.google.com/file/d/1bpgVkP7BTtr4PAXRMoeRBQCYRPxGa2qJ/view?usp=drive_link" target="_blank" rel="noreferrer"><Image src={ROW_PHASE_OVERVIEW_GRAPHIC} alt="" /></Link>

			<Link className="col-phase-overview-graphic-link" href="https://drive.google.com/file/d/1bpgVkP7BTtr4PAXRMoeRBQCYRPxGa2qJ/view?usp=drive_link" target="_blank" rel="noreferrer"><Image src={COL_PHASE_OVERVIEW_GRAPHIC} alt="" /></Link>

            <p>Through generous philanthropic support, Education Strategy Group has worked with communities across the U.S. as they&#39;ve incorporated social capital development strategies into their college and career pathways, in areas like work-based learning, college and career advising, and classroom learning. These include: </p>
        </div>
    </div>
  )
}

export default LeadersInTheField