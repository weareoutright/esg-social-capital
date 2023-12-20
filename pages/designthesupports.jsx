import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

import { PHASE_INFO } from '../constants/jsonContent/phaseInfo';
import PhaseLayout from '../components/PhaseLayout';

export default function DesignTheSupportsPage() {
	const phaseInfo = PHASE_INFO.phaseTwo;

	const DesignTheSupports = () => (
		<>
		<PhaseLayout phaseInfo={phaseInfo} />
		</>
	);

	return (
		<>
		<Layout currentPage='design-the-supports'>
			<NextSeo
				title="ESG Social Capital"
				description="Achieving Greater Impact"
			/>
			<DesignTheSupports />
		</Layout>
		</>
	);
}
