import INFO_AND_STATS from '../../constants/info_and_stats.svg';

export const HERO_CONTENT = {
	main_title: 'Cultivating Career Connections',
	subtitle:
		'A Framework for Building, Strengthening, and Mobilizing Students’ Social Capital',
	intro_content: (
		<>
			<p>
				Who helped you get to where you are now? How have you helped others get
				to where they are?
			</p>
			<br />
			<p>
				Social capital—or, simply put, “who we know”—can unlock and open doors
				to economic and career success for all learners. But how can schools,
				districts, and communities actively support students in recognizing the
				value of their existing relationships, expanding their connections,  and
				leveraging their networks to open up new educational and career
				opportunities?
			</p>
		</>
	),
	btn_text: 'Get Started',
	btn_href: '#whyscmatters',
};

export const WHY_SC_MATTERS_CONTENT = {
	main_title: 'Why Social Captial Matters',
	intro_content: (
		<p>
			Social capital—or, simply put, “who we know”—can unlock doors to new
			opportunities. When embedded within educational pathways, social capital
			tools and strategies can ensure students are better connected to key
			individuals who can help them understand their postsecondary and career
			options, prepare for the requirements and expectations of their chosen
			occupation, and begin to build a strong occupational identity.
		</p>
	),
	video_content: (
		<div className="content-justify">
			<p>
				Expanding and mobilizing social capital is most imperative for students
				of backgrounds that have been{' '}
				<span className="red-highlight">
					historically underrepresented in high-wage, high-demand fields
				</span>{' '}
				like healthcare and information technology. Research shows that weak
				ties—or one’s acquaintances—are the most helpful for connecting people
				to new job opportunities (Source:
				<Link
					href="https://hbr.org/2022/12/which-connections-really-help-you-find-a-job"
					alt=""
					target="_blank"
					rel="noreferrer"
				>
					Harvard Business Review
				</Link>
				), as the diversity and breadth of one’s network increases access to
				different information, resources, and support.
			</p>
			<br />
			<p>
				Without direct, even if loose, connections to people in industries that
				provide a family-sustaining wage, the likelihood of a person finding
				their way to these jobs diminishes. Yet, research by the{' '}
				<Link
					href="https://cci.stradaeducation.org/pv-release-dec-8-2021/#clarity"
					target="_blank"
					rel="noreferrer"
					alt=""
				>
					Strada Education Foundation
				</Link>{' '}
				reveals that{' '}
				<span className="red-highlight">
					just half of college seniors feel confident in their ability to
					network with alumni or professionals to make career connections
				</span>
				. Untapped opportunities to build social capital in occupations or
				fields of interest can leave some students a step behind as they begin
				their careers.
			</p>
		</div>
	),
};

export const INFO_AND_STATS_CONTENT = {
	stats_img: (
		<>
			<Link
				className="info-and-stats-img-link"
				href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/"
				target="_blank"
				rel="noreferrer"
			>
				<Image src={INFO_AND_STATS} alt="Infographic on Social Capital Stats" />
			</Link>
			<small>
				(Source:{' '}
				<Link
					href="https://www.cnbc.com/2019/12/27/how-to-get-a-job-often-comes-down-to-one-elite-personal-asset.html"
					target="_blank"
					rel="noreferrer"
					alt=""
				>
					CNBC WORK
				</Link>
				;{' '}
				<Link
					href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/"
					target="_blank"
					rel="noreferrer"
					alt=""
				>
					LinkedIn
				</Link>
				)
			</small>
		</>
	),
	stats_content: (
		<div className="content-justify">
			<p>
				Addressing inequities in economic opportunity requires addressing
				network inequities — and{' '}
				<span className="red-highlight">
					that work must start long before a student enters the workforce
				</span>
				. Few education systems identify social capital development as a
				critical component in their college and career preparation priorities
				despite the fact that expanding students’ networks and giving students
				the tools, confidence, and know-how to leverage their relationships can
				increase their access to new information, resources, and opportunities.
				Regrettably, this is too often left to chance. As they work to prepare
				students for college and career, education systems can more
				intentionally work to help students build and leverage their
				connections.
			</p>
			<br />
			<p>[[A VIDEO GOES HERE]]</p>
			<br />
			<p>
				How can communities more intentionally bring social capital to the
				forefront in their work to prepare students for college and career? On
				this website, you’ll find a framework for how to{' '}
				<span className="red-highlight">
					more purposefully integrate social capital development into pathways
					and help students develop the skills, confidence, and agency
				</span>{' '}
				to leverage existing relationships and build new connections in pursuit
				of their educational and professional aspirations.
			</p>
			<br />
			<p>
				Through generous philanthropic support, Education Strategy Group has
				worked with communities across the U.S. as they’ve incorporated social
				capital development strategies into their college and career pathways,
				in areas like work-based learning, college and career advising, and
				classroom learning. These include:{' '}
			</p>
		</div>
	),
};

// changed plan and putting content directly into frontend for now - will refactor later

// export const MAP_CONTENT {

// }
