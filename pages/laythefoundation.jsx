import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

import { PHASE_INFO } from '../constants/jsonContent/phaseInfo';
import PhaseLayout from '../components/PhaseLayout';
import { getMenus } from '../lib/wp_content/Menus';
import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';


export default function LayTheFoundationPage({menus}) {
	const phaseInfo = PHASE_INFO.phaseOne;

	const LayTheFoundation = () => (
		<>
			<PhaseLayout phaseInfo={phaseInfo} />
		</>
	);

	return (
		<>
		<Layout currentPage="lay-the-foundation" menus={menus}>
			<NextSeo
				title="Cultivating Connections | Lay The Foundation"
				description="Achieving Greater Impact"
			/>
			<LayTheFoundation />
		</Layout>
		</>
	);
}

export async function getServerSideProps({ res }) {
	const { menus, headers: menuHeaders } = await getMenus();

	const headers = [
		menuHeaders];
	setOutgoingHeaders({ headers, res });

	return {
		props: {
			menus
		},
	};
}
