import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Head from 'next/head';

import styles from './index.module.css';
import ResourcesHeader from '../components/Resources/ResourcesHeader';
import PhaseHeader from '../components/PhaseHeader';
import NextPage from '../components/NextPage';
import ResourcesContent from '../components/Resources/ResourcesContent';

export default function ResourcesPage() {
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
		<Layout currentPage='resources'>
			<NextSeo
				title="ESG Social Capital"
				description="Achieving Greater Impact"
			/>
			<Resources />
		</Layout>
		</>
	);
}
