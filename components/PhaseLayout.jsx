import React from 'react'

import styles from "../pages/index.module.css";
import PhaseTitle from './PhaseTitle';
import PhaseContent from './PhaseContent';
import NextPage from './NextPage';

import PhaseHeader from './PhaseHeader';

const PhaseLayout = ({phaseInfo, coreParagraphBlocks, actionStepBlocks, featuredImage, phasePostFields, title, menus}) => {
  const {sourceUrl: startImgUrl} = phasePostFields.sidebarTransition.startImage.node;
  const {sourceUrl: endImgUrl} = phasePostFields.sidebarTransition.endImage.node;
  const actionSteps = actionStepBlocks.map((block) => block.actionStep)

  return (
    <>
    <PhaseHeader menus={menus}/>
		<div className={`${styles.header} font-extrabold text-center w-fit content-page`}>
			<PhaseTitle 
        headerSvg={phaseInfo.headerSvg} 
        phaseNum={phasePostFields.phaseLabel.toUpperCase()} 
        phaseTitle={title} 
        phaseHeaderContent={coreParagraphBlocks} 
        phaseHeaderImg={featuredImage.node.sourceUrl}
        startImage={startImgUrl}
        endImage={endImgUrl} />
			<PhaseContent phaseContent={actionSteps} />	
		</div>
		<NextPage nextPage={phaseInfo.nextPage} nextPageAnchorLink={phaseInfo.nextPageAnchorLink}/>
    </>
  )
}

export default PhaseLayout