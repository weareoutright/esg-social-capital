import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Head from 'next/head';
import HeaderCustom from '../components/HeaderCustom';

import styles from './index.module.css';
import PhaseOneTitle from '../components/LayTheFoundations/PhaseOneTitle';
import StickyNote from '../components/StickyNote';

const testContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda, vitae itaque consectetur qui voluptas eaque sit saepe iste, impedit alias. Consequatur atque vel dolorum beatae perspiciatis autem magni quia?"

export default function LayTheFoundationPage() {
	const LayTheFoundation = () => (
		<>
		<HeaderCustom homePageHeader={false}/>
		<div className={`${styles.header} font-extrabold text-center w-fit LayTheFoundation`}>
			<PhaseOneTitle />
			<StickyNote title="title" location="San Diego, CA" content={testContent} learnMore="www.google.com" />
		</div>
		</>
	);

	return (
		<>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
			<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
		</Head>

		<Layout currentPage="lay-the-foundation">
			<NextSeo
				title="ESG Social Capital"
				description="Generated by create-pantheon-decoupled-kit."
			/>
			<LayTheFoundation />
		</Layout>
		</>
	);
}
