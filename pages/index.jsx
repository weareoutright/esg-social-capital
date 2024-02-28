import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import { getHomeBlocks } from '../lib/wp_content/HomePage';
import { getMenus } from '../lib/wp_content/Menus';
import HeaderCustom from '../components/HeaderCustom';

import styles from './index.module.css';

import Hero from '../components/HomePage/Hero';
import WhySCMatters from '../components/HomePage/WhySCMatters';
import LeadersInTheField from '../components/HomePage/LeadersInTheField';
import MapArea from '../components/HomePage/MapArea';
import parse from 'html-react-parser';


export default function Home({pageBy, menus}) {
	const {editorBlocks} = pageBy;

	const {homepageHero} = editorBlocks.filter((block) => block.name === 'acf/homepage-hero')[0];
	const {whySocialCapitalMatters} = editorBlocks.filter((block) => block.name === 'acf/why-socap')[0];
	const {leadersInTheField} = editorBlocks.filter((block) => block.name === 'acf/leaders-in-field')[0];
	const {homepageMap} = editorBlocks.filter((block) => block.name === 'acf/homepage-map')[0];

	const regex1 = /src="\/wp-content\/uploads\//gm;
	const regex2 = /src="\/\/wp-content\/uploads\//gm;
	const regex3 = /srcset=".+"/gm;

	// Alternative syntax using RegExp constructor
	// const regex = new RegExp('src="\\\/wp-content\\\/uploads\\\/', 'gm')

	const startingStr = leadersInTheField.content;
	const subst = `src="${process.env.WPENGINE_URL}/wp-content/uploads/`;

	// The substituted value will be contained in the result variable
	const result1 = startingStr.replace(regex1, subst);
	const result2 = result1.replace(regex2, subst)
	const result3 = result2.replace(regex3, "")

	const WPHero = {
		title: homepageHero.title,
		subtitle: homepageHero.subtitle,
		content: parse(homepageHero.content),
		callToAction: homepageHero.callToAction,
		backgroundImage: homepageHero.backgroundImage.node.uri,
	}

	const WPWhySCMatters = {
		title: whySocialCapitalMatters.title,
		content: parse(whySocialCapitalMatters.content),
	}

	const WPLeadersInTheField = {
		title: leadersInTheField.title,
		content: parse(result3),
		gallery: leadersInTheField.gallery,
	}

	const WPHomePageMap = {
		content: parse(homepageMap.content),
		locations: homepageMap.locations,
		mapImage: homepageMap.mapImage,
		responsiveImage: homepageMap.responsiveImage,
	}

	const HomepageHeader = () => (
		<>
		<HeaderCustom />
		<div className={`${styles.header} font-extrabold text-center w-fit`}>
			<Hero WPHero={WPHero} />
			<WhySCMatters WPWhySCMatters={WPWhySCMatters} />
			<LeadersInTheField WPLeadersInTheField={WPLeadersInTheField} />
			<MapArea WPHomePageMap={WPHomePageMap} 
			/>
		</div>
		</>
	);

	return (
		<>
		<Layout currentPage="home" menus={menus}>
			<NextSeo
				title="Cultivating Connections | Home"
				description="Achieving Greater Impact"
			/>
			<HomepageHeader />
		</Layout>
		</>
	);
}

export async function getServerSideProps({ res }) {
	const { pageBy, headers: postHeaders } = await getHomeBlocks();
	const { menus, headers: menuHeaders } = await getMenus();

	const headers = [
		postHeaders, menuHeaders];
	setOutgoingHeaders({ headers, res });

	return {
		props: {
			pageBy,
			menus
		},
	};
}
