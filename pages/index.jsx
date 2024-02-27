import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import { getHomeBlocks } from '../lib/wp_content/HomePage';
import HeaderCustom from '../components/HeaderCustom';

import styles from './index.module.css';

import Hero from '../components/HomePage/Hero';
import WhySCMatters from '../components/HomePage/WhySCMatters';
import LeadersInTheField from '../components/HomePage/LeadersInTheField';
import MapArea from '../components/HomePage/MapArea';
import parse from 'html-react-parser';

export default function Home({ pageBy} ) {
	const {editorBlocks} = pageBy;

	const {homepageHero} = editorBlocks.filter((block) => block.name === 'acf/homepage-hero')[0];
	const {whySocialCapitalMatters} = editorBlocks.filter((block) => block.name === 'acf/why-socap')[0];
	const {leadersInTheField} = editorBlocks.filter((block) => block.name === 'acf/leaders-in-the-field')[0];
	const {homepageMap} = editorBlocks.filter((block) => block.name === 'acf/homepage-map')[0];

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

	const WPLeadersInThField = {
		title: leadersInTheField.title,
		content: parse(leadersInTheField.content),
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
			<LeadersInTheField WPLeadersInThField={WPLeadersInThField} />
			<MapArea WPHomePageMap={WPHomePageMap} />
		</div>
		</>
	);

	return (
		<>
		<Layout currentPage="home">
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

	const headers = [
		postHeaders];
	setOutgoingHeaders({ headers, res });

	return {
		props: {
			pageBy,
		},
	};
}
