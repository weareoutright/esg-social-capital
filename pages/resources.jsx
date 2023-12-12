import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import styles from './index.module.css';
import HeaderCustom from '../components/HeaderCustom';
import NextPage from '../components/NextPage';
import FOLDED_CORNER from "../constants/phase-corner-fold.svg"

export default function ResourcesPage() {
	const nextPage = "Phase 3: Execute & Evaluate"
	const nextPageAnchorLink = "/executeandevaluate"

	const Resources = () => (
		<>
		<div className="layout_folded_corner"><Image src={FOLDED_CORNER} alt="" /></div>
		<HeaderCustom homePageHeader={false}/>
		<div className={`${styles.header} font-extrabold text-center w-fit content-page Resources`}>
			Resources
		</div>
		<NextPage nextPage={nextPage} nextPageAnchorLink={nextPageAnchorLink}/>
		</>
	);

	return (
		<>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
			<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
		</Head>

		<Layout currentPage='resources'>
			<NextSeo
				title="ESG Social Capital"
				description="Generated by create-pantheon-decoupled-kit."
			/>
			<Resources />
		</Layout>
		</>
	);
}
