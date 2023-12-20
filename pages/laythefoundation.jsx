import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

import { PHASE_INFO } from '../constants/jsonContent/phaseInfo';
import PhaseLayout from '../components/PhaseLayout';


export default function LayTheFoundationPage() {
	const phaseInfo = PHASE_INFO.phaseOne;

	const LayTheFoundation = () => (
		<>
			<PhaseLayout phaseInfo={phaseInfo} />
		</>
	);

	return (
		<>
		<Layout currentPage="lay-the-foundation">
			<NextSeo
				title="ESG Social Capital"
				description="Achieving Greater Impact"
			/>
			<LayTheFoundation />
		</Layout>
		</>
	);
}

// export async function getServerSideProps({ res }) {
// 	const { menuItems, menuItemHeaders } = await getFooterMenu();
// 	const { posts, headers: postHeaders } = await getLatestPosts(12);

// 	const headers = [menuItemHeaders, postHeaders];
// 	setOutgoingHeaders({ headers, res });

// 	return {
// 		props: {
// 			menuItems,
// 			posts,
// 		},
// 	};
// }
