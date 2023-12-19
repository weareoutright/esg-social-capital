import PIN from '../../constants/phase-pin.svg';

import PHASE_TITLE_IMG from '../../constants/phase-title-img.svg';
import Phase2HeaderContent from '../../components/DesignTheSupports/Phase2headerContent';
import Phase3HeaderContent from '../../components/ExecuteAndEvaluate/Phase3HeaderContent';
import { PHASE1_CONTENT, PHASE2_CONTENT, PHASE3_CONTENT } from './phaseContent';

export const PHASE_INFO = {
	phaseOne: {
		headerSvg: PIN,
		phaseNum: 1,
		phaseTitle: 'Lay The Foundation',
		phaseHeaderContent: (
			<>
				<p className="content-justify">
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
				<p className="content-justify">
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
		phaseHeaderImg: PHASE_TITLE_IMG,
		phaseContent: PHASE1_CONTENT,
		nextPage: 'Phase 2: Design The Supports',
		nextPageAnchorLink: '/designthesupports',
	},
	phaseTwo: {
		headerSvg: PIN,
		phaseNum: 2,
		phaseTitle: 'Design The Supports',
		phaseHeaderContent: <Phase2HeaderContent />,
		phaseHeaderImg: PHASE_TITLE_IMG,
		phaseContent: PHASE2_CONTENT,
		nextPage: 'Phase 3: Execute and Evaluate',
		nextPageAnchorLink: '/executeandevaluate',
	},
	phaseThree: {
		headerSvg: PIN,
		phaseNum: 3,
		phaseTitle: 'Execute & Evaluate',
		phaseHeaderContent: <Phase3HeaderContent />,
		phaseHeaderImg: PHASE_TITLE_IMG,
		phaseContent: PHASE3_CONTENT,
		nextPage: 'Cultivating Career Connections: Additional Resources',
		nextPageAnchorLink: '/resources',
	},
};
