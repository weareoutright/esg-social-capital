import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Head from 'next/head';

import styles from './index.module.css';
import ResourcesHeader from '../components/Resources/ResourcesHeader';
import PhaseHeader from '../components/PhaseHeader';
import NextPage from '../components/NextPage';
import ResourcesContent from '../components/Resources/ResourcesContent';
import { getMenus } from '../lib/wp_content/Menus';
import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
import { getPhasePosts } from '../lib/wp_content/PhasePostBlocks';

export default function ResourcesPage({menus, ltfPosts, dtsPosts, eePosts, resourcesPosts}) {
	// const ltfTools = ltfPosts.editorBlocks.filter((block) => block.name === "acf/action-step").map((step) => step.actionStep.tools)

	// const dtsTools = dtsPosts.editorBlocks.filter((block) => block.name === "acf/action-step").map((step) => step.actionStep.tools)

	// const eeTools = eePosts.editorBlocks.filter((block) => block.name === "acf/action-step").map((step) => step.actionStep.tools)

	const {resourcesList} = resourcesPosts.editorBlocks.filter((block) => block.name === "acf/resources")[0]

	const Resources = () => (
		<>
		<PhaseHeader menus={menus}/>
		<div className={`${styles.header} font-extrabold text-center w-fit content-page Resources`}>
			<ResourcesHeader />
			<ResourcesContent resourcesList={resourcesList} />
		</div>
		<NextPage nextPage={null} nextPageAnchorLink={null}/>
		</>
	);

	return (
		<>
		<Layout currentPage='resources' menus={menus}>
			<NextSeo
				title="Cultivating Connections | Resources"
				description="Achieving Greater Impact"
			/>
			<Resources />
		</Layout>
		</>
	);
}

export async function getServerSideProps({ res }) {
	const { menus, headers: menuHeaders } = await getMenus();
	// const { postBy: ltfPosts, headers: ltfHeaders} = await getPhasePosts("laythefoundation");
	// const { postBy: dtsPosts, headers: dtsHeaders} = await getPhasePosts("designthesupports");
	// const { postBy: eePosts, headers: eeHeaders} = await getPhasePosts("executeandevaluate");
	const {postBy: resourcesPosts, headers: resourcesHeaders} = await getPhasePosts("resources")

	const headers = [
		menuHeaders, 
		// ltfHeaders, dtsHeaders, eeHeaders
	];
	setOutgoingHeaders({ headers, res });

	return {
		props: {
			menus,
			// ltfPosts,
			// dtsPosts,
			// eePosts,
			resourcesPosts
		},
	};
}
