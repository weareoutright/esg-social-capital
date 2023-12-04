import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Head from 'next/head';
import HeaderCustom from '../components/HeaderCustom';
import Image from 'next/image';
import PHASE1_TITLE_IMG from "../constants/phase1images/p1-title-img.svg"

import styles from './index.module.css';

export default function LayTheFoundationPage() {
	const LayTheFoundation = () => (
		<>
		<HeaderCustom homePageHeader={false}/>
		<div className={`${styles.header} font-extrabold text-center w-fit LayTheFoundation`}>
			<div className="sidebar">
				<span></span>
			</div>
			<div className='title-div'>
				<div>
					<h3>Lay The Foundation</h3>
					<p className='content-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint est vel. Quis eligendi in enim sequi sint dolore est quos explicabo nemo labore, distinctio doloribus et temporibus minus! Dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis corporis distinctio aliquid minima unde perferendis? Quibusdam laboriosam error totam et aspernatur amet voluptate recusandae nesciunt, fugiat, provident nobis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus obcaecati itaque quas sit. Cum nihil ad ipsa sapiente neque alias inventore perferendis eaque minus eveniet tempore eum, hic nisi?</p>
				</div>
				<div>
					<Image src={PHASE1_TITLE_IMG} alt="" />
				</div>
			</div>
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
