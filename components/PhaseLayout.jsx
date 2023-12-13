import React from 'react'

import styles from "../pages/index.module.css";
import PhaseTitle from './PhaseTitle';
import PhaseContent from './PhaseContent';
import NextPage from './NextPage';

import PhaseHeader from './PhaseHeader';

const PhaseLayout = ({phaseInfo}) => {
  console.log(phaseInfo.phaseHeaderContent)

  return (
    <>
    <PhaseHeader />
		<div className={`${styles.header} font-extrabold text-center w-fit content-page`}>
			<PhaseTitle headerSvg={phaseInfo.headerSvg} phaseNum={phaseInfo.phaseNum} phaseTitle={phaseInfo.phaseTitle} phaseHeaderContent={phaseInfo.phaseHeaderContent} phaseHeaderImg={phaseInfo.phaseHeaderImg}/>
			<PhaseContent phaseContent={phaseInfo.phaseContent}/>	
		</div>
		<NextPage nextPage={phaseInfo.nextPage} nextPageAnchorLink={phaseInfo.nextPageAnchorLink}/>
    </>
  )
}

export default PhaseLayout