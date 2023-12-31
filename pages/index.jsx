import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import { getFooterMenu } from '../lib/Menus';
import { getLatestPosts } from '../lib/Posts';
import HeaderCustom from '../components/HeaderCustom';

import styles from './index.module.css';
import Hero from '../components/HomePage/Hero';
import WhySCMatters from '../components/HomePage/WhySCMatters';
import LeadersInTheField from '../components/HomePage/LeadersInTheField';
import MapArea from '../components/HomePage/MapArea';

export default function Home({ menuItems, posts}) {
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
				title="ESG Social Capital"
				description="Achieving Greater Impact"
			/>
			<HomepageHeader />
		</Layout>
		</>
	);
}

export async function getServerSideProps({ res }) {
	const { menuItems, menuItemHeaders } = await getFooterMenu();
	const { posts, headers: postHeaders } = await getLatestPosts(12);

	const headers = [menuItemHeaders, postHeaders];
	setOutgoingHeaders({ headers, res });

	return {
		props: {
			menuItems,
			posts,
		},
	};
}
