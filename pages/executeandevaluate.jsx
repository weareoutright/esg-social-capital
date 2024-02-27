import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

import { PHASE_INFO } from '../constants/jsonContent/phaseInfo';
import PhaseLayout from '../components/PhaseLayout';
import { getMenus } from '../lib/wp_content/Menus';
import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';

export default function ExecuteAndEvaluatePage({menus}) {
	const phaseInfo = PHASE_INFO.phaseThree;

	const ExecuteAndEvaluate = () => (
		<>
			<PhaseLayout phaseInfo={phaseInfo} />
		</>
	);

	return (
		<>
		<Layout currentPage='execute-and-evaluate' menus={menus}>
			<NextSeo
				title="Cultivating Connections | Execute & Evaluate"
				description="Achieving Greater Impact"
			/>
			<ExecuteAndEvaluate />
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
