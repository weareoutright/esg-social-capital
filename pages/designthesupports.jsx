import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

import { PHASE_INFO } from '../constants/jsonContent/phaseInfo';
import PhaseLayout from '../components/PhaseLayout';
import { getMenus } from '../lib/wp_content/Menus';
import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
import { getPhasePosts } from '../lib/wp_content/PhasePostBlocks';

export default function DesignTheSupportsPage({menus, postBy}) {
	const phaseInfo = PHASE_INFO.phaseTwo;

	const {editorBlocks, featuredImage, phasePostFields, title} = postBy;
	const coreParagraphBlocks = editorBlocks.filter((block) => block.name === 'core/paragraph')
	const actionStepBlocks = editorBlocks.filter((block) => block.name === 'acf/action-step')

	const DesignTheSupports = () => (
		<>
			<PhaseLayout phaseInfo={phaseInfo} coreParagraphBlocks={coreParagraphBlocks} actionStepBlocks={actionStepBlocks} featuredImage={featuredImage} phasePostFields={phasePostFields} title={title} />
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
	const { postBy, headers: postHeaders} = await getPhasePosts("designthesupports");

	const headers = [
		menuHeaders, postHeaders];
	setOutgoingHeaders({ headers, res });

	return {
		props: {
			menus,
			postBy
		},
	};
}
