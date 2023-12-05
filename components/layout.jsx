import { Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
import FooterNav from './FooterNav';
import styles from './layout.module.css';

export default function Layout({ children, preview, currentPage }) {

	return (
		<div className={`${styles.layout} flex flex-col`}>
			{preview && <PreviewRibbon />}
			<main className="mb-auto">
				{children}</main>
			<FooterNav currentPage={currentPage}/>
		</div>
	);
}
