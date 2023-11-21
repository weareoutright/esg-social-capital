import React, {useState, useEffect} from 'react'
import {document, window} from "browser-monads-ts"
import Image from 'next/image'
import HOME_BTN from "../constants/home_btn.svg"
import RESOURCES_BTN from "../constants/auto_stories.svg"
import Link from 'next/link'

const FooterNav = ({currentPage}) => {
    const [navProgress, setNavProgress] = useState(12)
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
        if (typeof window !== `undefined`) {
          window.onscroll = () => {
            setOffset(window.scrollY);
          };
        }
      }, []);

    useEffect(() => {
        // setNavProgress((offset / (height/2)) * 100)
        if (currentPage === 'home') {
            setNavPillHome('navPill-whiteBg')
            setNavPillLayFoundation('navPill-whiteBg')
            setNavPillDesign('navPill-whiteBg')
            setNavPillExecEval('navPill-whiteBg')
            setNavPillShare('navPill-whiteBg')
        }

        if (currentPage === "lay-the-foundation") {
            setNavProgress(30)
            setNavPillHome('navPill-pinkBg')
            setNavPillLayFoundation('navPill-whiteBg')
            setNavPillDesign('navPill-whiteBg')
            setNavPillExecEval('navPill-whiteBg')
            setNavPillShare('navPill-whiteBg')
        }

        if (currentPage === "design-the-supports") {
            setNavProgress(55)
            setNavPillHome('navPill-pinkBg')
            setNavPillLayFoundation('navPill-pinkBg')

            setNavPillDesign('navPill-whiteBg')
            setNavPillExecEval('navPill-whiteBg')
            setNavPillShare('navPill-whiteBg')
        }

        if (currentPage === "execute-and-evaluate") {
            setNavProgress(80)
            setNavPillHome('navPill-pinkBg')
            setNavPillLayFoundation('navPill-pinkBg')
            setNavPillDesign('navPill-pinkBg')

            setNavPillExecEval('navPill-whiteBg')
            setNavPillShare('navPill-whiteBg')
        }

        if (currentPage === "resources") {
            setNavProgress(100)
            setNavPillHome('navPill-pinkBg')
            setNavPillLayFoundation('navPill-pinkBg')
            setNavPillDesign('navPill-pinkBg')
            setNavPillExecEval('navPill-pinkBg')
            setNavPillShare('navPill-whiteBg')
        }
    }, [offset])

  return (
    <div className="FooterNav">
        <progress value={navProgress} max="100"></progress>
        <Link href="/" className={`pill ${navPillHome}`} ><Image src={HOME_BTN} alt="Home"/></Link>
        <Link href="laythefoundation" className={`pill ${navPillLayFoundation}`}>lay the foundation</Link>
        <Link href="designthesupports" className={`pill ${navPillDesign}`}>design the supports</Link>
        <Link href="executeandevaluate" className={`pill ${navPillExecEval}`}>execute & evaluate</Link>
        <Link href="resources" className={`pill ${navPillShare}`}><Image src={RESOURCES_BTN} alt="Share"/></Link>
    </div>
  )
}

export default FooterNav