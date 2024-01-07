import PIN from '../../constants/phase-pin.svg';
import Red from '../../helperFuncs/Red';

import PHASE1_TITLE_IMG from '../../constants/esg_illustrations/ltf-header.svg';
import PHASE2_TITLE_IMG from '../../constants/esg_illustrations/dts-header.svg';
import PHASE3_TITLE_IMG from '../../constants/esg_illustrations/ee-header.svg';

import { PHASE1_CONTENT, PHASE2_CONTENT, PHASE3_CONTENT } from './phaseContent';

export const PHASE_INFO = {
	phaseOne: {
		headerSvg: PIN,
		phaseNum: 1,
		phaseTitle: 'Lay The Foundation',
		phaseHeaderContent: (
			<>
				<p className="content-justify phase-content">
					School districts likely already have many of the foundational pieces
					in place for helping students build social capital. These might
					include current strategies around work-based learning, important
					partnerships with employers and postsecondary institutions, or
					advising plans to guide students in their next step. However, these
					strategies often lack a high-level coordinating vision, intentional
					design planning, progress monitoring, and evaluation to ensure that
					all students are benefiting from these critical relationship-building
					experiences.
				</p>
				<p className="content-justify phase-content">
					Communities must create a strong vision and set intentions for this
					work to ensure all students will leave with a robust personal network
					and the skills to activate it toward their goals. The Cultivating
					Connections framework starts with{' '}
					<span className="red-highlight">creating a theory of action</span> for
					what a social capital strategy should look like for their students,
					then <span className="red-highlight">building the case</span> for why
					social capital matters for their community,{' '}
					<span className="red-highlight">identifying assets</span> and{' '}
					<span className="red-highlight">mapping networks</span> to better
					understand who and what is already in place to support student social
					capital development.
				</p>
			</>
		),
		phaseHeaderImg: PHASE1_TITLE_IMG,
		phaseContent: PHASE1_CONTENT,
		nextPage: 'Phase 2: Design The Supports',
		nextPageAnchorLink: '/designthesupports',
	},
	phaseTwo: {
		headerSvg: PIN,
		phaseNum: 2,
		phaseTitle: 'Design The Supports',
		phaseHeaderContent: (
			<div className="Phase2HeaderContent">
				<p className="content-justify phase-content">
					Communities must have a clear system of program elements addressing
					social capital in order to ensure their vision becomes a reality for
					their students. Once a community has developed a theory of action and
					better understands their current assets, they can narrow in on where
					current practices could be enhanced or strengthened with social
					capital development strategies, tools, or resources. Leveraging
					existing programs, resources, and infrastructures in this work ensures
					alignment and sustainability long-term and reduces the chances that
					staff with limited capacity see this as an additional burden. There
					are also a host of organizations and comprehensive programs available
					for purchase that can help fill in gaps.
				</p>
				<p className="content-justify phase-content">
					The second phase of the Cultivating Connections framework includes{' '}
					<span className="red-highlight">developing a framework</span> to
					structure the student experience,{' '}
					<span className="red-highlight">creating a scope and sequence</span>{' '}
					that sets grade-level expectations for social capital development,{' '}
					<span className="red-highlight">identifying opportunity areas</span>{' '}
					and how to solve for them,{' '}
					<span className="red-highlight">writing an evaluation plan</span> for
					continuous monitoring, and{' '}
					<span className="red-highlight">training their team</span> to ensure
					high-quality implementation and delivery.
				</p>
			</div>
		),
		phaseHeaderImg: PHASE2_TITLE_IMG,
		phaseContent: PHASE2_CONTENT,
		nextPage: 'Phase 3: Execute and Evaluate',
		nextPageAnchorLink: '/executeandevaluate',
	},
	phaseThree: {
		headerSvg: PIN,
		phaseNum: 3,
		phaseTitle: 'Execute & Evaluate',
		phaseHeaderContent: (
			<div className="Phase3HeaderContent">
				<p className="content-justify phase-content">
					While every community’s needs and existing resources (human,
					financial, or otherwise) are unique, there are student-facing
					strategies that can provide a natural sequencing to help students
					articulate the value of their social capital, better understand who
					they currently have in their network, build the skill sets and
					confidence to make new connections, and practice this learning within
					safe spaces.
				</p>
				<p className="content-justify phase-content">
					Communities must implement their plan with fidelity, including
					evaluating and updating approaches along the way, in order to track
					progress toward, and ultimately achieve, their vision of success for
					all students. In phase three of the Cultivating Connections framework,
					communities <Red>work their plan</Red>, beginning their student-facing
					work by <Red>introducing and translating social capital concepts</Red>
					, guiding students as they{' '}
					<Red>
						map their current relationships, building student social capital
						toolkits
					</Red>{' '}
					with the necessary skills and tools, and putting students into the
					driver seat as they{' '}
					<Red>expand and mobilize their professional networks</Red>.
				</p>
			</div>
		),
		phaseHeaderImg: PHASE3_TITLE_IMG,
		phaseContent: PHASE3_CONTENT,
		nextPage: 'Cultivating Career Connections: Resources',
		nextPageAnchorLink: '/resources',
	},
};
