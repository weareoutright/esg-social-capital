import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

import { PHASE_INFO } from '../constants/jsonContent/phaseInfo';
import PhaseLayout from '../components/PhaseLayout';

export default function ExecuteAndEvaluatePage() {
	const phaseInfo = PHASE_INFO.phaseThree;

	const ExecuteAndEvaluate = () => (
		<>
			<PhaseLayout phaseInfo={phaseInfo} />
		</>
	);

	return (
		<>
		<Layout currentPage='execute-and-evaluate'>
			<NextSeo
				title="Cultivating Connections | Execute & Evaluate"
				description="Achieving Greater Impact"
			/>
			<ExecuteAndEvaluate />
		</Layout>
		</>
	);
}
