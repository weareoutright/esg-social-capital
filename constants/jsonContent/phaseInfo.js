import PIN from '../../constants/phase-pin.svg';

import PHASE_TITLE_IMG from '../../constants/phase-title-img.svg';
import { PHASE1_CONTENT } from './phase1content';

export const PHASE_INFO = {
	phaseOne: {
		headerSvg: PIN,
		phaseNum: 1,
		phaseTitle: 'Lay The Foundation',
		// phaseHeaderContent: <Phase1HeaderContent />,
		phaseHeaderImg: PHASE_TITLE_IMG,
		phaseContent: PHASE1_CONTENT,
		nextPage: 'Phase 2: Design The Supports',
		nextPageAnchorLink: '/designthesupports',
	},
	phaseTwo: {
		headerSvg: PIN,
		phaseNum: 2,
		phaseTitle: 'Design The Supports',
		// phaseHeaderContent: <Phase2HeaderContent />,
		phaseHeaderImg: PHASE_TITLE_IMG,
		phaseContent: PHASE1_CONTENT,
		nextPage: 'Phase 3: Execute and Evaluate',
		nextPageAnchorLink: '/executeandevaluate',
	},
	phaseThree: {
		headerSvg: PIN,
		phaseNum: 3,
		phaseTitle: 'Execute and Evaluate',
		// phaseHeaderContent: <Phase3HeaderContent />,
		phaseHeaderImg: PHASE_TITLE_IMG,
		phaseContent: PHASE1_CONTENT,
		nextPage: 'Cultivating Career Connections: Additional Resources',
		nextPageAnchorLink: '/resources',
	},
};
