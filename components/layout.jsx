import { Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
import FooterNav from './FooterNav';
import styles from './layout.module.css';

export default function Layout({ children, footerMenu, preview }) {
	const navItems = [
		{
			linkText: 'ESG Education Strategy Group',
			href: '/',
		},
		{
			linkText: 'Resources',
			href: '/',
		},
		{
			linkText: 'Share',
			href: '/',
		},
	];

	return (
		<div className={`${styles.layout} flex flex-col`}>
			{preview && <PreviewRibbon />}
			<Header navItems={navItems} />
			<main className="mb-auto">{children}</main>
			<FooterNav />
		</div>
	);
}
