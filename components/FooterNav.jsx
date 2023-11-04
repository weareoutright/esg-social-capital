import React, {useState, useEffect} from 'react'
import { document, window } from 'browser-monads-ts'

const FooterNav = () => {
    const [navProgress, setNavProgress] = useState(0)
    const [offset, setOffset] = useState(0);

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
    }, [offset])

  return (
    <div className="FooterNav">
        <progress value={navProgress} max="100"></progress>
    </div>
  )
}

export default FooterNav