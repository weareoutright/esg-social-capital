import CREATE_A_THEORY from '../esg_illustrations/create-a-theory.svg';
import BUILD_THE_CASE from '../esg_illustrations/build-the-case.svg';
import IDENTIFY_ASSETS from '../esg_illustrations/identify-your-assets.svg';
import MAP_NETWORK from '../esg_illustrations/map-network.svg';
import SCOPE_IT_OUT from '../esg_illustrations/scope-it-out.svg';
import FRAME_PROGRAM from '../esg_illustrations/frame-program.svg';
import ID_GAP_AREAS from '../esg_illustrations/id-gap-areas.svg';
import WRITE_PLAN from '../esg_illustrations/write-plan.svg';
import EQUITY_AND_ASSETS from '../esg_illustrations/equity-and-assets.svg';
import DISTRICT_TEAM from '../esg_illustrations/district-team.svg';
import PREPARE_PARTNERS from '../esg_illustrations/prepare-partners.svg';
import INTRO_AND_TRANSLATE from '../esg_illustrations/intro-and-translate.svg';
import MAP_AND_ASSESS from '../esg_illustrations/map-and-assess.svg';
import TOOLKITS from '../esg_illustrations/student-toolkits.svg';
import EXPAND_AND_MOBILIZE from '../esg_illustrations/expand-and-mobilize.svg';
import MONITOR_AND_ADJUST from '../esg_illustrations/monitor-and-adjust.svg';
import ANNUALLY_RESET from '../esg_illustrations/annually-reset.svg';

export const PHASE1_CONTENT = [
	{
		key: 'ltf1',
		parentPhase: 'Lay The Foundation',
		icon: CREATE_A_THEORY,
		title: 'Create a theory of action',
		description:
			'Consider what you want for all students in your community and how an intentional social capital strategy will help you accomplish it. What will the impact be on your community because you prioritized social capital development in your college and career pathways work?',
		toolsArr: [
			{
				key: 'action-exercise',
				href: 'https://docs.google.com/document/d/1kVPRCKpMBngJf37tx3NNELNQ5WP5NfhAYM8Ab3BGKnI/edit?usp=sharing',
				title: 'Social Capital Theory of Action Exercise',
			},
		],
		stickyNotesArr: [],
	},
	{
		key: 'ltf2',
		parentPhase: 'Lay The Foundation',
		icon: BUILD_THE_CASE,
		title: 'Build The Case',
		description:
			'Help all members of your community—not just students—understand why this work is so important. Build a foundational understanding of what social capital is and why it matters for student success with a variety of stakeholders within your community. Set the expectation that everyone(educators, parents, leaders, mentors) can, and should, serve as brokers of student and community social capital.',
		toolsArr: [
			{
				key: 'module',
				href: 'https://docs.google.com/presentation/d/1U_YwFAVatI_ZNP0ZvZ1K5BZ1xb1sR27kjbdXSXMfUNM/edit?usp=sharing',
				title: 'SoCap 101 Professional Development - Module',
			},
			{
				key: 'facilitation',
				href: 'https://docs.google.com/document/d/1nUqaS6gghaT2MZ21Ui_dR6AWUwZW2s5oP-Y5d1I9dsA/edit?usp=sharing',
				title: 'SoCap 101 Professional Development - Faciliation Guide',
			},
			{
				key: 'talking-guide',
				href: 'https://www.equitablefutures.org/toolkit/a-guide-for-talking-about-social-capital/',
				title: 'A Guide For Talking About Social Capital (Equitable Futures)',
			},
		],
		stickyNotesArr: [
			{
				key: '1b1',
				title: 'Engage parents and families as part of social capital building',
				location: 'San Diego, California',
				content:
					'For the San Diego team, it was necessary and beneficial to introduce the concept and benefits of social capital to families. They started with parents participating in an existing leadership program. Family engagement was already a core tenet in their approach to delivering equitable, community-oriented programming, and they found significant interest among parents in learning more about social capital. Leveraging families as both partners in helping students better understand the power in their networks and as brokers for new relationships can add tremendous value and keep these conversations going after the school day is over. It also recognizes the assets that schools already have in their students and families. In other words, there’s value in starting with a community’s own networks before seeking out new connections.',
				href: 'https://docs.google.com/document/d/14XS_Yq3s5OzUGgx4XG325ugPSR8e-ZUBmTNcOLJfobA/edit?usp=sharing',
			},
		],
	},
	{
		key: 'ltf3',
		parentPhase: 'Lay The Foundation',
		icon: IDENTIFY_ASSETS,
		title: 'Identify Your Assets',
		description:
			'Inventory the programs and curricula you already have in place within your school and community that provide students with opportunities to learn about and build their social capital. Where are you already helping students make connections or have new conversations with the people they already know? Map what they are, how they might intersect with one another, and where the opportunities are to strengthen these efforts.',
		toolsArr: [
			{
				key: 'mapping-exercise',
				href: 'https://docs.google.com/document/d/1EFyEbkWbOK3XxRlKbe4Rw_FlkrsWW7fusU5RaFxMoKE/edit?usp=sharing',
				title: 'Social Capital Mapping Exercise',
			},
		],
		stickyNotesArr: [
			{
				key: '1c1',
				title: 'Leverage existing resources to better align the work',
				location: 'Chattanooga, Tennessee',
				content:
					'Communities may already have trusted materials that could be used in different and more intentional ways to help build student social capital. As part of helping students prepare for internship opportunities through their STEP-UP program, the Public Education Foundation in Chattanooga,TN had a work readiness guide that walked students through various activities to help them feel confident and ready for their internships. This team took the existing document, divided it into modules that worked for delivery within the advisory periods, and supplemented it with other social capital resources, like the Connected Futures curriculum. This approach minimized the need to develop completely brand new content and served to make social capital development a more explicit component within the existing materials.',
				href: 'https://docs.google.com/document/d/1a5IfQ7_1LcJh5u_ORTqCbgY2yseLKzjPswEjimXRKeE/edit?usp=sharing',
			},
			{
				key: '1c2',
				title: 'Integrate social capital content into academic coursework',
				location: 'Nashville, Tennessee',
				content:
					'Career and Technical Education (CTE) courses aren’t the only places where students should learn about the value of building and leveraging their social capital. Academic classes can also build relevance and student engagement by incorporating these ideas and strategies. At Maplewood High School in Nashville, the College and Career Readiness coach partnered with the sociology teacher to integrate social capital lessons into their syllabus. Once or twice a week, the coach would come into the classroom and bring a concept (e.g., relationship mapping, strong ties/weak ties, networking) to life, aligning the lesson to what students were currently learning in their existing sociology coursework.',
				href: 'https://docs.google.com/document/u/0/d/1nVJt_TOWZWKkJIr6PgnpAwD9CKOnZNi4Rf4fJcBlaIk/edit',
			},
		],
	},
	{
		key: 'ltf4',
		parentPhase: 'Lay The Foundation',
		icon: MAP_NETWORK,
		title: 'Map Your Network',
		description:
			'Your staff, leaders, and school community already have a rich network from which your students can benefit. Consider the people and organizations already a part of your ecosystem and map these relationships to help you better understand the connections you might leverage and identify new relationships you might want to build. ',
		toolsArr: [
			{
				key: 'clayton-playbook',
				href: 'https://docs.google.com/document/u/1/d/1rURUHGdtuwCrLjouLV3hcTfz7o3T158RPxt2QX3cwRs/copy?ts=607dd322',
				title:
					'Social Capital Playbook Worksheet (Clayton Christensen Institute)',
			},
			{
				key: 'community-resources',
				href: 'www.google.com',
				title: 'Mapping Your Community Resources',
			},
		],
		stickyNotesArr: [
			{
				key: '1d1',
				title: 'Encourage staff to strengthen their own social capital',
				location: 'Tacoma, Washington',
				content:
					'While it is important to provide support to students to build and mobilize their own networks, it is also valuable for student-facing staff to see themselves as potential relationship brokers. This includes connecting with educators and administrators within the school building and looking outside the school community to bring new connections to students. The College Success Foundation advisor at Lincoln High School in Tacoma, WA made it a priority to strengthen her own ties to teachers and staff in the building to better serve as a resource to them and to the students. As a result of these efforts, several teachers invited her into their classrooms to deliver quick presentations on the work of the College Success Foundation and how they could benefit from participation in their programming.',
				href: 'www.google.com',
			},
		],
	},
];

export const PHASE2_CONTENT = [
	{
		icon: FRAME_PROGRAM,
		title: 'Frame Your Program',
		description:
			'Use the Asset Map from Identify Your Assets in Phase 1 to determine a clear Framework for how and when to provide access to social capital concepts, skill building, and experiences. What do we want to be true for all students?',
		toolsArr: [
			{
				key: 'framework-template',
				href: 'https://docs.google.com/document/d/1jH6EsEVxDRpXLrzIe-6A18hqTBuMlTArli4Dt9BOZUA/edit?usp=sharing',
				title: 'Framework Template',
			},
		],
		stickyNotesArr: [],
	},
	{
		icon: SCOPE_IT_OUT,
		title: 'Scope It Out',
		description:
			'Using the Theory of Action you created in Create A Theory of Action in Phase 1, your existing school, district, and state expectations/standards, and the framework from Phase 2, customize a Scope and Sequence for social capital concepts and expectations by grade level.What should this work look like at every grade? How will we measure success?',
		toolsArr: [
			{
				key: 'scope-and-sequence',
				href: 'https://docs.google.com/document/d/1mo_Oi95zIUUVWPr6GaqdhauKAoMeIDbLpcJkjQGQLiM/edit?usp=sharing',
				title: 'Scope and Sequence Template',
			},
		],
		stickyNotesArr: [
			{
				key: '2b1',
				title: 'Bring your values into social capital development work',
				location: 'Boston, Massachusetts',
				content:
					'A major priority for the Boston team was ensuring that social capital conversations, materials, tools, and resources did not suggest (explicitly or implicitly, to both young people and adults) that students were lacking in relationships or that their networks and experiences held no value. Continuously centering the lived experiences of the district’s most vulnerable students—including Black and Latinx students, students with disabilities, emerging multilingual learners, queer and trans students, and students from economically disinvested communities—with an emphasis on asset-forward language led to robust and necessary conversations about framing and preparing the adults for meeting students where they are. The team continues to discuss how to best ensure that everyone involved in this work—from district leaders to community partners to teachers—approaches this from a perspective that recognizes and celebrates the unique contribution that each student brings to their communities.',
				href: 'https://docs.google.com/document/d/1SZhU1SfziCXwYgU_pDc9nt-CFMeXTZS_-woQYsCTIEw/edit?usp=sharing',
			},
		],
	},
	{
		icon: ID_GAP_AREAS,
		title: 'Identify Gap Areas',
		description:
			'Compare your scope and sequence with your asset map from Identify Your Assets in Phase 1. Where are there gaps in what you currently offer based on what you would like to offer? Are there tools or resources that need to be built? Make a plan for building these or doing some research about solutions that may be available for purchase.',
		toolsArr: [
			{
				key: 'socap-opp-areas',
				href: 'https://docs.google.com/document/d/1FmCzcocQILLwUKYsAb7UFhPxgjOw4UpjP1C8BdKel9Y/edit?usp=sharing',
				title: 'Social Capital Opportunity Areas',
			},
			{
				key: 'edtech-connect',
				href: 'https://whoyouknow.org/tools/',
				title: 'EdTech That Connects (Clayton Christensen Institute)',
			},
		],
		stickyNotesArr: [
			{
				key: '2c1',
				title:
					'Consider bringing in external support and expertise to help enhance student learning',
				location: 'Pinellas County, Florida',
				content:
					'If the types of expertise that would help students gain the skills to mobilize their social capital aren’t available in-house, communities might look to external partners to help meet that need. This was a strategy used by the two pilot schools in Pinellas County, FL. At Boca Ciega High School, the teacher who led the pilot found a great deal of value in investing in a Dale Carnegie course focused on professional development and communication. The feedback survey administered at the end of the year showed that students found this experience among the most helpful because it gave them practice in introducing themselves and asking questions of others. Similarly, the teacher at Lealman Innovation Academy did not have a structure for work-based learning and invested in support from Junior Achievement and their work-based learning curriculum. Both teachers looked to external expertise to bring additional and well-respected learning to their students.',
				href: 'https://docs.google.com/document/d/15M1s_flaN76RHU5ZP2Ae05Zb5S4AjdnRTxRPe5jqj5k/edit?usp=sharing',
			},
		],
	},
	{
		icon: WRITE_PLAN,
		title: 'Write Your Plan',
		description:
			'Develop a plan for implementing, monitoring, and evaluating the strategies and activities you’ve identified in your scope and sequence. Who will own the different aspects of the plan? Are there any other people (staff, partners, etc.) who might need to be brought in?  When will you assess student impact?',
		toolsArr: [
			{
				key: 'socap-implementation-strats',
				href: 'https://docs.google.com/document/d/1LRfAX9CM3cDy7nYE2ADhJf9z7tHq7T60zZhrfehvRR4/edit?usp=sharing',
				title: 'Social Capital Implementation Strategies',
			},
			{
				key: 'assessment-learning',
				href: 'https://drive.google.com/file/d/1WHoX56ggBR3Cex8C5RrmCH2JpptDocsO/view?usp=sharing',
				title:
					'Social Capital Assessment + Learning for Equity (SCALE) Measures - User Guide (Search Institute)',
			},
		],
		stickyNotesArr: [
			{
				key: '2d1',
				title:
					'Dedicate appropriate staff time and leadership to developing the approach',
				location: 'San Diego, California',
				content:
					'The San Diego team made a conscious decision to have a dedicated staff member on the Avenues for Success team (housed under San Diego State University) lead the social capital pilot. This person was responsible for integrating social capital strategies, tools, and resources into the team’s existing framework and programming. While not every community might have the resources and capacity for an entire position, it is necessary to think about how much time is required for developing a social capital approach and who might be equipped to lead that work, particularly at the front end. For the San Diego team, this person also helped build the knowledge and the internal capacity of their staff for supporting student social capital development.',
				href: 'https://docs.google.com/document/d/14XS_Yq3s5OzUGgx4XG325ugPSR8e-ZUBmTNcOLJfobA/edit?usp=sharing',
			},
		],
	},
	{
		icon: EQUITY_AND_ASSETS,
		title: 'Center Equity and Asset-Based Strategies',
		description:
			'Consider any additional supports needed to better ensure the full participation of all students, particularly first generation college-going students, those with diverse learning needs, and English language or multilingual learners. What materials might need to be modified? Who might you need to partner with or intentionally include? How might you best leverage the assets they bring?',
		toolsArr: [
			{
				key: 'students-disabilites',
				href: 'https://docs.google.com/document/d/10aKRaSTNERlUPYdn3AZkT3l3BDFfXg5w0aJKFK5_OoQ/edit?usp=sharing',
				title:
					'Learning Memo: Supporting Students with Disabilities in Building their Social Capital',
			},
			{
				key: 'students-esl',
				href: 'https://docs.google.com/document/d/1ZlT9HB4TqNBXGgc6mhDFsD-8Bq1q1Yvo2NhhLv55RFw/edit?usp=sharing',
				title:
					'Learning Memo: Supporting English Language Learners in Building their Social Capital',
			},
		],
		stickyNotesArr: [
			{
				key: '2e1',
				title:
					'Bring in community partners to provide support to English Language Learners',
				location: 'Chattanooga, Tennessee',
				content:
					'Because of the breadth of their implementation plan, the Chattanooga team spent additional time and resources to get English Language Learners the support needed to more fully engage in their pilot. They invested in translated materials and worked with ELL teachers to adapt their delivery but found that one of their most effective strategies for increasing access to the learning was in inviting a partner from a community-based organization to help translate and provide guidance for students. As the team noted, having a person who shared a common background and could speak their home language participate in the planned experiences helped build excitement and interest among students who were otherwise feeling disengaged.',
				href: 'https://docs.google.com/document/d/1a5IfQ7_1LcJh5u_ORTqCbgY2yseLKzjPswEjimXRKeE/edit?usp=sharing',
			},
			{
				key: '2e2',
				title:
					'Intentionally connect students to individuals that reflect their backgrounds and experiences',
				location: 'San Antonio, Texas',
				content:
					'Throughout the pilot, the San Antonio team was committed to engaging professionals that reflected the experiences and racial and ethnic backgrounds of participating students. The STEM panel, for example, was made up of professionals and undergraduates whose stories resonated with the high school students. They were first-generation professionals, many of whom had grown up in the San Antonio region. Similarly, the near-peer mentors recruited through the Alamo Fellows program were all first-generation college students and STEM majors who had attended schools in San Antonio ISD or neighboring school districts. The near peer mentorship experience benefitted both the mentors and mentees as it provided the young mentors to also see themselves as role models and an opportunity to “give back” to their community and future generations.',
				href: 'https://docs.google.com/document/u/0/d/1yz0Da2QMbhR3NX7Sw927B0DELoQebSs2lPOP7EScAxc/edit',
			},
		],
	},
	{
		icon: DISTRICT_TEAM,
		title: 'Train Your District Team',
		description:
			'Identify the people that need purposeful learning and engagement around this work. Develop a training plan that encourages buy-in, customizes for the audience, and equips plan implementers or advocates for driving the work. Some of your team might just need a “101” training while others would find it beneficial to go deeper into ideas on mindsets or best practices before engaging with students.',
		toolsArr: [
			{
				key: 'pd-modules',
				href: 'https://docs.google.com/presentation/d/1U_YwFAVatI_ZNP0ZvZ1K5BZ1xb1sR27kjbdXSXMfUNM/edit?usp=sharing',
				title: 'Professional Development Modules',
			},
		],
		stickyNotesArr: [
			{
				key: '2f1',
				title:
					'Provide staff with what they need to best support students and employer partners',
				location: 'Indianapolis, Indiana',
				content:
					'In Indianapolis, Modern Apprenticeship Program (MAP) apprentices benefit from a Youth Apprenticeship Manager (YAM) who serves as their coach, support, and liaison to their supervisor. The YAMS meet regularly with both apprentice and supervisor to make sure the assignment is going well and that all parties are getting the support they need. Before launching the pilot, the MAP team convened the YAMs for a social capital orientation to introduce them to the goals of the project and to outline what this work would mean for them. In addition, to avoid adding more to YAMs’ workload and to maintain some consistency, the MAP team developed a “script” to be used with students and supervisors. The YAMs were given the freedom to make the script more personal but were provided the language to help deliver consistent information to all of their apprentices and industry partners.',
				href: 'https://docs.google.com/document/d/1VBziqW29ElQWT8uM6G_y149ouEXVyzBBA759XRB5hyA/edit?usp=sharing',
			},
		],
	},
	{
		icon: PREPARE_PARTNERS,
		title: 'Prepare Your Partners',
		description:
			'External partners (community organizations, industry partners, alumni, and families) are essential to this work but may not have thought about the importance of social capital in their work or about how they serve as facilitators of student social capital. Ahead of implementation, consider what strengths these partners bring, how you want to engage them, and what they may need to be prepared to support students in this work. How will you continue to engage them over the course of the year?',
		toolsArr: [
			{
				key: 'employer-capacity',
				href: 'https://docs.google.com/document/d/1cJJqQewwfRrh7egzBDihe5orFNBeAo_xZJt_IFtGH38/edit?usp=sharing',
				title:
					'Learning Memo: Building Employer Capacity to Facilitate Student Social Capital Development',
			},
			{
				key: 'youth-apprenticeship',
				href: 'https://drive.google.com/drive/folders/1LvZxkKi8e4OoaSz9F6sRzMVF226WVjL_?usp=sharing',
				title: 'Indianapolis Youth Apprenticeship Manager Conversation Guides',
			},
		],
		stickyNotesArr: [
			{
				key: '2g1',
				title: 'Bring in alumni to tell their social capital stories',
				location: 'Montgomery County, Maryland',
				content:
					'The Montgomery County social capital project team found different ways to incorporate the “success stories” of near-peers who have recently earned bachelor’s degrees and achieved career success into the social capital pilot. In the introductory social capital asynchronous module they developed for the student orientation, the team featured a video of a recent ACES (Achieving Collegiate Excellence and Success) graduate discussing their academic and career journey. The featured graduate shared the people in their network that helped through their transitions from community college to a four year university. In addition, the social capital project team hosted a summer bridge program, which included a series of professional panels and opportunities for students to network with several graduates of Montgomery County Public Schools and the ACES program who shared their career and postsecondary journeys. Hearing from people with similar backgrounds and experiences can be affirming to students. It reinforces that their aspirations are feasible, can generate ideas about who in their network they could leverage, and garner support and guidance.',
				href: 'https://docs.google.com/document/d/1g1p8Wfmli0uB-863_j2pkewm1NWBttIy1ChjMEcLD8w/edit?usp=sharing',
			},
			{
				key: '2g2',
				title:
					'Make social capital development an explicit expectation for employer partners',
				location: 'Indianapolis, Indiana',
				content:
					'Helping students build new connections and mentoring relationships is often stated as a benefit of work-based learning and other career-connected learning opportunities but is too frequently assumed to be something that comes about organically. To move past the assumption that social capital building is happening during these experiences, it is important to make this an explicit expectation for students and employer partners alike. The Indianapolis team developed the Expand Connections Challenge, where apprentices were incentivized to meet and have meaningful conversations with people within their worksite. The team previewed the Challenge with worksite supervisors and set the expectation that they provide opportunities (e.g., staff meetings, work events) for apprentices to form new connections and encourage them to share their career interests and educational aspirations with colleagues. Over the course of the pilot, one student even had the opportunity to sit down for a conversation with the company CEO, who connected her with other people with whom she shared career interests.',
				href: 'https://docs.google.com/document/d/1VBziqW29ElQWT8uM6G_y149ouEXVyzBBA759XRB5hyA/edit?usp=sharing',
			},
		],
	},
];

export const PHASE3_CONTENT = [
	{
		icon: INTRO_AND_TRANSLATE,
		title: 'Work Your Plan: Introduce and Translate Social Capital Concepts',
		description:
			'The term “social capital” can mean a variety of things to students. It can seem a foreign concept or one that holds negative connotations. An important first step in this work might be to start with defining what is meant by social capital and why it is an important and renewable resource, particularly as they are planning for college and career. This introduction could take a variety of forms, ranging from highly structured to more informal.',
		toolsArr: [
			{
				key: 'mc-lesson-1',
				href: 'https://docs.google.com/presentation/d/1CqpmSR-IWPcRPH0-8gEENPqTE2LBL4z2919oBAumfL4/edit?usp=sharing',
				title: 'Lesson: Who Do YOU Know? (Montgomery County Public Schools)',
			},
			{
				key: 'sd-after-high-school',
				href: 'https://drive.google.com/file/d/1sWrr4CiBBFjQl_e2H-Ic9Fl0PPKNNt4z/view?usp=drive_link',
				title:
					'Building Social Capital After High School (Avenues for Success)',
			},
		],
		stickyNotesArr: [
			{
				key: '3a1',
				title: 'Prioritize language that better resonates with students',
				location: 'Boston, Massachusetts',
				content:
					'The term “social capital” can seem jargony or may connote, for some people, a transactional, or inauthentic relationship. The Boston team recognized the value in engaging students in the ideas of social capital but questioned the utility of sticking to the terminology. For example, in their pilot, Apprentice Learning chose to frame initial social capital conversations by asking students about their “team.” Who are the people that are rooting for them? The ones that are on their bench? Who do they currently have on their team and who do they need? This language better resonated with the students and was more consistent with the programming being delivered by the Apprentice Learning staff.',
				href: 'https://docs.google.com/document/d/1SZhU1SfziCXwYgU_pDc9nt-CFMeXTZS_-woQYsCTIEw/edit?usp=sharing',
			},
		],
	},
	{
		icon: MAP_AND_ASSESS,
		title: 'Work Your Plan: Map and Assess Current Relationships',
		description:
			'Relationship mapping is a powerful tool for helping students visualize who is in their network and in what settings. While the goal should always be an asset-based discussion of student networks and how to leverage them, teams can employ different approaches depending on the needs of their student population.',
		toolsArr: [
			{
				key: 'no-wrong-door',
				href: 'https://drive.google.com/file/d/1z4eEejJGBn5zEY-a96WcHOG5JRmkCwaI/view?usp=sharing',
				title: 'Mapping Relationships (Administration for Community Living)',
			},
			{
				key: 'ci-relationship',
				href: 'https://docs.google.com/document/d/1XmhdPIM5cSSHxEnAn2hXO4wlfPGXHQ1m/copy',
				title: 'Relationship Mapping Tool (Clayton Christensen Institute)',
			},
			{
				key: 'rm-pinellas',
				href: 'https://drive.google.com/file/d/1vj8j-cDCEdyMSa4fpwIpLvDKDXNJosUc/view?usp=sharing',
				title: 'Relationship Map (Pinellas County)',
			},
			{
				key: 'rm-sandiego',
				href: 'https://drive.google.com/file/d/1fMV3uiJb_DU2xE53iEKDw4W8jfSlBIu1/view?usp=sharing',
				title: 'Relationship Map (San Diego)',
			},
		],
		stickyNotesArr: [
			{
				key: '3b1',
				title:
					'Revisit relationship maps regularly to help students more deeply understand their networks',
				location: 'Pinellas County, Florida',
				content:
					'In Boca Ciega High School in Pinellas County, FL, students were frequently encouraged to go back to their original relationship maps and continue to add contacts they might have either forgotten to list in the first place or had recently met. This kept networks at the top of students’ minds and many began to add the guest speakers in their classroom as weak tie connections. At Lealman Innovation Academy, students did the exercise at least twice to deepen their understanding of who was in their network. After the original mapping exercise revealed to the teacher that students did not have a clear understanding of who should be included, she decided to do the exercise again - giving students more practice in thinking about the connections they have in their lives.',
				href: 'https://docs.google.com/document/d/15M1s_flaN76RHU5ZP2Ae05Zb5S4AjdnRTxRPe5jqj5k/edit?usp=sharing',
			},
		],
	},
	{
		icon: TOOLKITS,
		title: 'Work Your Plan: Build Student Social Capital Toolkits',
		description:
			'Communities can help students take full advantage of opportunities to build new connections by equipping them with the tools and skill sets to increase their confidence, agency, and ability to communicate about themselves. This tool development can take many forms -  elevator pitches, strength and interests assessments, resume building workshops - and serve as opportunities for students to gain the confidence, know-how, and practice in talking about their goals, strengths, and experiences.',
		toolsArr: [
			{
				key: 'linkedin-workshop',
				href: 'https://docs.google.com/presentation/d/18zaMLX3basxFXFIER3mMeGmbvfGasm20/edit?usp=sharing&ouid=111141657303388023157&rtpof=true&sd=true',
				title: 'LinkedIn Workshop (San Antonio)',
			},
			{
				key: 'connected-course',
				href: 'https://connectedfuturescourse.org/',
				title: 'Connected Futures Course',
			},
			{
				key: 'elevator-pitch',
				href: 'https://drive.google.com/file/d/1pU8UzA_ncHjvR1jrry6sCvWd4ZGd306o/view?usp=drive_link',
				title: 'Elevator Pitch Workshops (San Diego)',
			},
			{
				key: 'mc-lesson-2',
				href: 'https://docs.google.com/presentation/d/10u33zVBs2tTkz7EBNQ4fnL9AxEplBOyHOBUnx0uGjVA/edit?usp=sharing',
				title:
					'Lesson 2 - CONNECT- Working and Communication for Social Capital (Montgomery County)',
			},
			{
				key: 'mc-lesson-3',
				href: 'https://docs.google.com/presentation/d/1jokWSg1_KCPRkowLjRtsekQnO3NkbD_yKn0vDC2TXa0/edit?usp=sharing',
				title: 'Lesson 3-How to CONNECTwork Using Linkedin (Montgomery County)',
			},
		],
		stickyNotesArr: [
			{
				key: '3c1',
				title:
					'Incorporate student skill-building to prepare them for real-world experiences',
				location: 'San Antonio, Texas',
				content:
					'The San Antonio team provided several workshops meant to scaffold student learning to prepare them, one step at a time, for their participation in summer internship opportunities and employment after high school. Most workshops helped students develop the tangible tools (e.g., resumes, LinkedIn profiles) they needed to apply for the internships but also increased their confidence and preparedness for interviews. In a focus group conducted by the team, students shared that this was their first opportunity to develop a resume, create a LinkedIn profile, or network with employers. They expressed that these types of skill-building opportunities were missing from their education, where the emphasis on academics seemed disconnected from the skill sets students felt they needed for the “real world.”',
				href: 'https://docs.google.com/document/d/1yz0Da2QMbhR3NX7Sw927B0DELoQebSs2lPOP7EScAxc/edit?usp=sharing',
			},
		],
	},
	{
		icon: EXPAND_AND_MOBILIZE,
		title: 'Work Your Plan: Expand and Mobilize Student Professional Networks',
		description:
			'Once students feel confident and are equipped with social capital-building tools and skill sets, Communities can provide them with safe opportunities to practice, whether in smaller, more intimate settings like classrooms or in larger networking events. This is an opportunity to pull in industry and community partners for support as hosts and/or participants. Equip students with follow-up strategies that will allow them to stay connected to the new additions to their network and possibly leverage these relationships down the line.',
		toolsArr: [
			{
				key: 'employer-guidance',
				href: 'https://docs.google.com/document/d/1z_ha3AG8pTvdJjyQrn1tnmC0-Oe9PQRT/edit?usp=sharing&ouid=111141657303388023157&rtpof=true&sd=true',
				title: 'Employer Guidance for Social Capital event (Nashville)',
			},
			{
				key: 'expand-connections',
				href: 'https://drive.google.com/file/d/1cdCwhlEHE1a1Zj8Y-vmS09QEWIO_ofvQ/view?usp=drive_link',
				title: 'Expand Connections Challenge (Indianapolis)',
			},
			{
				key: 'networking-101',
				href: 'https://drive.google.com/file/d/1EG78UGh0R7ruJ296fWg8QSXMA_b-coWy/view?usp=sharing',
				title: 'Networking 101 Workshop (San Diego)',
			},
		],
		stickyNotesArr: [
			{
				key: '3d1',
				title:
					'Scaffold learning ahead of networking opportunities with employers',
				location: 'Nashville, Tennessee',
				content:
					'Networking events were critical milestones for most of the Nashville pilots and several of the College and Career Readiness coaches called them the most impactful experiences for their students. However, they also recognized that many students require more time to prepare for these types of experiences, especially if held off-site. Across multiple events, the range of preparedness varied from students who showed up in business attire, confident in their ability to engage with employer partners, to those whose anxieties and concerns kept them from making it on the bus. This was true despite students having developed elevator pitches and a battery of questions to ask industry partners. Upon reflection, coaches realized that a scaffolded approach, building up to an off-site networking event, would have likely helped students gradually build up their confidence and ease their anxieties.',
				href: 'https://docs.google.com/document/d/1nVJt_TOWZWKkJIr6PgnpAwD9CKOnZNi4Rf4fJcBlaIk/edit?usp=sharing',
			},
		],
	},
	{
		icon: MONITOR_AND_ADJUST,
		title: 'Monitor and Adjust',
		description:
			"Review student data on a regular basis in normal planning and curriculum cycles. Are your students learning the content? Are their networks expanding? Are they able to better leverage their strong and weak ties? Is the content/curriculum you’ve planned meeting your students' needs? \n\nWhile surveys can be helpful evaluation instruments, communities might consider alternative or additional ways of capturing information about their strategies. Methods like student focus groups or interviews may help give life to what the surveys are saying and bring in student voice in a more intentional and purposeful way. Allowing for staff and teachers to also provide their feedback is also critical for ensuring sustained buy-in and continuous improvement.",
		toolsArr: [
			{
				key: 'search-institute',
				href: 'https://docs.google.com/document/d/1EcqPNqmpBRu_GOuRle_zsqNDbA7fsRRV/edit?usp=sharing&ouid=111141657303388023157&rtpof=true&sd=true',
				title: 'Social Capital Focus Group Tool (Search Institute)',
			},
			{
				key: 'scale-measures',
				href: 'https://drive.google.com/file/d/1WHoX56ggBR3Cex8C5RrmCH2JpptDocsO/view?usp=sharing',
				title:
					'Social Capital Assessment + Learning For Equity (SCALE) Measures - User Guide (Search Institute)',
			},
		],
		stickyNotesArr: [
			{
				key: '3e1',
				title: 'Introduce social capital metrics into student tracking systems',
				location: 'Dallas, Texas',
				content:
					'The Graduation Alliance team in Dallas, TX relied on a tool they called their workbook to keep track of their interactions with students. The workbook is comprehensive and helps the staff document conversations and resource-sharing with students. As a part of this pilot, the team incorporated additional social capital metrics (e.g. number of new connections, types of conversations they were having with supervisors) and regularly asked students about the new or stronger connections they were building during their apprenticeship. Utilizing an existing tool meant the team did not have to create a different tracker and ensured that social capital development remained top of mind during coaching check-ins.',
				href: 'https://docs.google.com/document/d/1ssqjBB5C1HWMIZjm7XUCid3eKGQv-TozsCzfZ_snhHw/edit?usp=sharing',
			},
			{
				key: '3e2',
				title: 'Develop an avenue for continuous student feedback and input',
				location: 'Chattanooga, Tennessee',
				content:
					'The Chattanooga team discovered early on that students enjoyed participating in conversations about their relationships and networks. A focus group intended to be a one-time event became a monthly meeting of a group called the SoCap Student Leadership Ambassadors, who represented all 17 of the 10th grade advisory classrooms. This addition to the pilot plan ensured that the team remained student-focused and provided students with learning and experiences that they wanted. In return, the ambassadors supported and championed the content that was being delivered to them and their classmates during their advisory periods.',
				href: 'https://docs.google.com/document/d/1a5IfQ7_1LcJh5u_ORTqCbgY2yseLKzjPswEjimXRKeE/edit?usp=sharing',
			},
		],
	},
	{
		icon: ANNUALLY_RESET,
		title: 'Annually Reset',
		description:
			'Spend some time reflecting with your team and partners on where you feel you made an impact, what could have gone better, and where you see opportunities for strengthening the work moving forward. Use your data from Monitor and Adjust (above) to update your Framework, Scope and Sequence, and annual plan (all created in Phase 2).',
		toolsArr: [
			{
				key: 'framework-template-1',
				href: 'https://docs.google.com/presentation/u/0/d/1q4zLw66ooOl0hPG_yG4IoITfYqGPc6WzpQaLDb3Fn60/edit',
				title: 'Framework Template',
			},
			{
				key: 'scope-seq-template',
				href: 'https://docs.google.com/presentation/d/1-sL9z9k_FUZFJ0IZrvygAA8-oohPOLah730Egv1X2Us/edit?usp=sharing',
				title: 'Scope and Sequence template',
			},
			{
				key: 'implement-so-cap',
				href: 'https://docs.google.com/document/d/1LRfAX9CM3cDy7nYE2ADhJf9z7tHq7T60zZhrfehvRR4/edit?usp=sharing',
				title: 'Social Capital Implementation Strategies',
			},
		],
		stickyNotesArr: [],
	},
];
