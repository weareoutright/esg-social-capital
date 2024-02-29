import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

import { PHASE_INFO } from '../constants/jsonContent/phaseInfo';
import PhaseLayout from '../components/PhaseLayout';
import { getMenus } from '../lib/wp_content/Menus';
import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
import { getPhasePosts } from '../lib/wp_content/PhasePostBlocks';

export default function ExecuteAndEvaluatePage({menus, postBy}) {
	const phaseInfo = PHASE_INFO.phaseThree;

	const {editorBlocks, featuredImage, phasePostFields, title} = postBy;
	const coreParagraphBlocks = editorBlocks.filter((block) => block.name === 'core/paragraph')
	const actionStepBlocks = editorBlocks.filter((block) => block.name === 'acf/action-step')

	const ExecuteAndEvaluate = () => (
		<>
			<PhaseLayout phaseInfo={phaseInfo} coreParagraphBlocks={coreParagraphBlocks} actionStepBlocks={actionStepBlocks} featuredImage={featuredImage} phasePostFields={phasePostFields} title={title} menus={menus}/>
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
	const { postBy, headers: postHeaders} = await getPhasePosts("executeandevaluate");

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
