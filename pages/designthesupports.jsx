import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

import { PHASE_INFO } from '../constants/jsonContent/phaseInfo';
import PhaseLayout from '../components/PhaseLayout';
import { getMenus } from '../lib/wp_content/Menus';
import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';

export default function DesignTheSupportsPage({menus}) {
	const phaseInfo = PHASE_INFO.phaseTwo;

	const DesignTheSupports = () => (
		<>
		<PhaseLayout phaseInfo={phaseInfo} />
		</>
	);

	return (
		<>
		<Layout currentPage='design-the-supports' menus={menus}>
			<NextSeo
				title="Cultivating Connections | Design The Supports"
				description="Achieving Greater Impact"
			/>
			<DesignTheSupports />
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
