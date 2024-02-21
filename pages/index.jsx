import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
// import { getFooterMenu } from '../lib/Menus';
import { getLatestPosts } from '../lib/Posts';
import { getHomeBlocks } from '../lib/wp_content/HomePage';
import HeaderCustom from '../components/HeaderCustom';

import styles from './index.module.css';

import Hero from '../components/HomePage/Hero';
import WhySCMatters from '../components/HomePage/WhySCMatters';
import LeadersInTheField from '../components/HomePage/LeadersInTheField';
import MapArea from '../components/HomePage/MapArea';

export default function Home({ pageBy} ) {
	console.log(pageBy)
	const HomepageHeader = () => (
		<>
		<HeaderCustom />
		<div className={`${styles.header} font-extrabold text-center w-fit`}>
			<Hero />
			<WhySCMatters />
			<LeadersInTheField />
			<MapArea />
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
