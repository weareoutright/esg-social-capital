import React from 'react'

import styles from "../pages/index.module.css";
import PhaseTitle from './PhaseTitle';
import PhaseContent from './PhaseContent';
import NextPage from './NextPage';

import Phase1HeaderContent from "./LayTheFoundation/Phase1HeaderContent";
import Phase2HeaderContent from './DesignTheSupports/Phase2HeaderContent';
import Phase3HeaderContent from "./ExecuteAndEvaluate/Phase3HeaderContent"

import PhaseHeader from './PhaseHeader';

const PhaseLayout = ({phaseInfo}) => {
  const phaseHeaderContents = {
    1: <Phase1HeaderContent />,
    2: <Phase2HeaderContent />,
    3: <Phase3HeaderContent />
  }

  return (
    <>
    <PhaseHeader />
		<div className={`${styles.header} font-extrabold text-center w-fit content-page`}>
			<PhaseTitle headerSvg={phaseInfo.headerSvg} phaseNum={phaseInfo.phaseNum} phaseTitle={phaseInfo.phaseTitle} phaseHeaderContent={phaseHeaderContents[phaseInfo.phaseNum]} phaseHeaderImg={phaseInfo.phaseHeaderImg}/>
			<PhaseContent phaseContent={phaseInfo.phaseContent}/>	
		</div>
		<NextPage nextPage={phaseInfo.nextPage} nextPageAnchorLink={phaseInfo.nextPageAnchorLink}/>
    </>
  )
}

export default PhaseLayout