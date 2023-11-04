import React, {useState, useEffect} from 'react'
import { document, window } from 'browser-monads-ts'
import Image from 'next/image'
import HOME_BTN from "../constants/home_btn.svg"
import Link from 'next/link'

const FooterNav = () => {
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
        if (typeof window !== `undefined`) {
          window.onscroll = () => {
            setOffset(window.scrollY);
          };
        }
      }, []);

    useEffect(() => {
        setNavProgress((offset / (height/2)) * 100)
        console.log(navProgress)
        if (navProgress < 7) {
            setNavPillHome('navPill-whiteBg')
            setNavPillLayFoundation('navPill-whiteBg')
            setNavPillDesign('navPill-whiteBg')
            setNavPillExecEval('navPill-whiteBg')
            setNavPillShare('navPill-whiteBg')
        }

        if (navProgress > 7 && navProgress < 15) {
            setNavPillHome('navPill-pinkBg')
            setNavPillLayFoundation('navPill-whiteBg')
            setNavPillDesign('navPill-whiteBg')
            setNavPillExecEval('navPill-whiteBg')
            setNavPillShare('navPill-whiteBg')
        }

        if (navProgress > 25 && navProgress < 35) {
            setNavPillHome('navPill-pinkBg')
            setNavPillLayFoundation('navPill-pinkBg')

            setNavPillDesign('navPill-whiteBg')
            setNavPillExecEval('navPill-whiteBg')
            setNavPillShare('navPill-whiteBg')
        }

        if (navProgress > 45 && navProgress < 55) {
            setNavPillHome('navPill-pinkBg')
            setNavPillLayFoundation('navPill-pinkBg')
            setNavPillDesign('navPill-pinkBg')

            setNavPillExecEval('navPill-whiteBg')
            setNavPillShare('navPill-whiteBg')
        }

        if (navProgress > 65 && navProgress < 75) {
            setNavPillHome('navPill-pinkBg')
            setNavPillLayFoundation('navPill-pinkBg')
            setNavPillDesign('navPill-pinkBg')
            setNavPillExecEval('navPill-pinkBg')

            setNavPillShare('navPill-whiteBg')
        }

        if (navProgress > 85 && navProgress < 100) {
            setNavPillHome('navPill-pinkBg')
            setNavPillLayFoundation('navPill-pinkBg')
            setNavPillDesign('navPill-pinkBg')
            setNavPillExecEval('navPill-pinkBg')
            setNavPillShare('navPill-pinkBg')
        }
    }, [offset])

  return (
    <div className="FooterNav">
        <progress value={navProgress} max="100"></progress>
        <Link href="/" className={`pill ${navPillHome}`}><Image src={HOME_BTN} alt="Home"/></Link>
        <button className={`pill ${navPillLayFoundation}`}>lay the foundation</button>
        <button className={`pill ${navPillDesign}`}>design the supports</button>
        <button className={`pill ${navPillExecEval}`}>execute & evaluate</button>
        <button className={`pill ${navPillShare}`}>share</button>
    </div>
  )
}

export default FooterNav