"use client"

import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import {document, window} from "browser-monads-ts"
import Image from 'next/image'
import HOME_BTN from "../constants/home_btn.svg"
import RESOURCES_BTN from "../constants/folder.svg"
import Link from 'next/link'
import MeterBtn from './MeterBtn';

const FooterNav = () => {
    const router = useRouter();
    const {route} = router;
    const [navProgress, setNavProgress] = useState(0)
    const [offset, setOffset] = useState(0);
    const [navPillHome, setNavPillHome] = useState('navPill-whiteBg')
    const [navPillLayFoundation, setNavPillLayFoundation] = useState('navPill-whiteBg')
    const [navPillDesign, setNavPillDesign] = useState('navPill-whiteBg')
    const [navPillExecEval, setNavPillExecEval] = useState('navPill-whiteBg')
    const [navPillShare, setNavPillShare] = useState('navPill-whiteBg')

    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

    useEffect(() => {
          window.onscroll = () => {
            setOffset(window.scrollY);
          };
      }, []);

    useEffect(() => {
      if (route === 'home' || route === '/') setOffset(0)
      if (route === '/laythefoundation') setOffset(100)

    }, [route])

    

    useEffect(() => {
        setNavProgress(((offset / (height/2)) * 60))
        // if (navProgress < 8) {
        //   setNavPillHome('navPill-whiteBg')
        //   setNavPillLayFoundation('navPill-whiteBg')
        //   setNavPillDesign('navPill-whiteBg')
        //   setNavPillExecEval('navPill-whiteBg')
        //   setNavPillShare('navPill-whiteBg')
        // }

        // if (navProgress >= 8 && navProgress <= 13) {
        //     setNavPillHome('navPill-pinkBg')
        //     setNavPillLayFoundation('navPill-whiteBg')
        //     setNavPillDesign('navPill-whiteBg')
        //     setNavPillExecEval('navPill-whiteBg')
        //     setNavPillShare('navPill-whiteBg')
        // }
        // if (navProgress >= 23 && navProgress <= 35) {
        //     setNavPillHome('navPill-pinkBg')
        //     setNavPillLayFoundation('navPill-pinkBg')
        //     setNavPillDesign('navPill-whiteBg')
        //     setNavPillExecEval('navPill-whiteBg')
        //     setNavPillShare('navPill-whiteBg')
        // }

        // if (navProgress >= 45 && navProgress <= 60) {
        //     setNavPillHome('navPill-pinkBg')
        //     setNavPillLayFoundation('navPill-pinkBg')
        //     setNavPillDesign('navPill-pinkBg')
        //     setNavPillExecEval('navPill-whiteBg')
        //     setNavPillShare('navPill-whiteBg')
        // }

        // if (navProgress >= 70 && navProgress <= 83) {
        //     setNavPillHome('navPill-pinkBg')
        //     setNavPillLayFoundation('navPill-pinkBg')
        //     setNavPillDesign('navPill-pinkBg')

        //     setNavPillExecEval('navPill-pinkBg')
        //     setNavPillShare('navPill-whiteBg')
        // }

        // if (navProgress >= 90) {
        //     setNavPillHome('navPill-pinkBg')
        //     setNavPillLayFoundation('navPill-pinkBg')
        //     setNavPillDesign('navPill-pinkBg')
        //     setNavPillExecEval('navPill-pinkBg')
        //     setNavPillShare('navPill-pinkBg')
        // }
    }, [offset])

  return (
    <div className="FooterNav">
        <progress className="footer-nav-progress" value={navProgress} min={0} max={100}></progress>
        <Link href="/" className={`pill ${navPillHome} image-btn`} ><Image src={HOME_BTN} alt="Home"/></Link>

        <Link href="laythefoundation"><MeterBtn phaseTitle={"Lay The Foundation"} scroll={navProgress} navPillShare={navPillLayFoundation} /></Link>

        <Link href="designthesupports"><MeterBtn phaseTitle={"Design The Supports"} scroll={navProgress} navPillShare={navPillDesign} /></Link>

        <Link href="executeandevaluate"><MeterBtn phaseTitle={"Execute & Evaluate"} scroll={navProgress} navPillShare={navPillLayFoundation} /></Link>
        <Link href="resources" className={`pill ${navPillShare} image-btn`}><Image src={RESOURCES_BTN} alt="Share"/></Link>

        
    </div>
  )
}

export default FooterNav