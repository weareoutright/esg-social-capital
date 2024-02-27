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

export default function ResourcesPage({menus}) {
	const Resources = () => (
		<>
		<PhaseHeader />
		<div className={`${styles.header} font-extrabold text-center w-fit content-page Resources`}>
			<ResourcesHeader />
			<ResourcesContent />
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

	const headers = [
		menuHeaders];
	setOutgoingHeaders({ headers, res });

	return {
		props: {
			menus
		},
	};
}
