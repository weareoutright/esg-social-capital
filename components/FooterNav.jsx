"use client"

import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import {document, window} from "browser-monads-ts"
import Image from 'next/image'
import HOME_BTN from "../constants/home_btn.svg"
import RESOURCES_BTN from "../constants/folder.svg"
import Link from 'next/link'
import MeterBtn from './MeterBtn';

const FooterNav = ({waypoints}) => {
    const router = useRouter();
    const {route} = router;

    const [currentPageProgress, setCurrentPageProgress] = useState('')
    const [desktopPageProgress, setDesktopPageProgress] = useState(0)
    const [ltfProgress, setLtfProgress] = useState(0)
    const [dtsProgress, setDtsProgress] = useState(0)
    const [eeProgress, setEeProgress] = useState(0)

    const [offset, setOffset] = useState(0);

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
      if (route === 'home' || route === '/') setDesktopPageProgress(10)
      if (route === '/laythefoundation') setDesktopPageProgress(30)
      if (route === '/designthesupports') setDesktopPageProgress(50)
      if (route === '/executeandevaluate') setDesktopPageProgress(80)
      if (route === '/resources') setDesktopPageProgress(100)
    }, [route])

    useEffect(() => {
      if (route === 'home' || route === '/') setCurrentPageProgress('.progress-value-home')
      if (route === '/laythefoundation') setCurrentPageProgress("progress-value-ltf")
      if (route === '/designthesupports') setCurrentPageProgress("progress-value-dts")
      if (route === '/executeandevaluate') setCurrentPageProgress("progress-value-ee")
      if (route === '/resources') setCurrentPageProgress("progress-value-resources")
    }, [route])

    // useEffect(() => {
    //   setCurrentPageProgress(0);
    // }, [route])

    // useEffect(() => {
    //   setDesktopPageProgress((offset / (height/2)) * 60)
    // }, [offset])

    useEffect(() => {
      if (route === '/') {
        setLtfProgress(-12)
        setDtsProgress(-12)
        setEeProgress(-12)
      }

      if (route === '/laythefoundation') {
        setLtfProgress(((offset / (height/2)) * 60))
        setDtsProgress(-12)
        setEeProgress(-12)
      }

      if (route === '/designthesupports') {
        setLtfProgress(100)
        setDtsProgress(((offset / (height/2)) * 60))
        setEeProgress(-12)
      }

      if (route === '/executeandevaluate') {
        setLtfProgress(100)
        setDtsProgress(100)
        setEeProgress(((offset / (height/2)) * 60))
      }

      if (route === '/resources') {
        setLtfProgress(100)
        setDtsProgress(100)
        setEeProgress(100)
      }

    }, [offset])

  return (
    <div className="FooterNav">
        <progress 
        className={`footer-nav-progress ${currentPageProgress}`} 
        value={desktopPageProgress} 
        max={100}></progress>
        <Link href="/" className={`pill navPill-whiteBg image-btn home-nav-btn`} ><Image src={HOME_BTN} alt="Home" /></Link>

        <Link href="laythefoundation"><MeterBtn phaseTitle={"Lay The Foundation"} scroll={ltfProgress} /></Link>

        <Link href="designthesupports"><MeterBtn phaseTitle={"Design The Supports"} scroll={dtsProgress} /></Link>

        <Link href="executeandevaluate"><MeterBtn phaseTitle={"Execute & Evaluate"} scroll={eeProgress} /></Link>

        <Link href="resources" className={`pill navPill-whiteBg image-btn ${route === "/resources" ? "resources-nav-btn" : ""}`}><Image src={RESOURCES_BTN} alt="Share"/></Link>
    </div>
  )
}

export default FooterNav