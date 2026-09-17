import { useEffect, useRef } from "react";
import { init } from "ityped";
import Rell from "../../assets/images/rellClimb.jpeg";
import "./intro.scss";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1600,
      backSpeed: 45,
      strings: ["Developer", "Musician", "Leader"],
    });
  }, []);

  return (
    <section className="intro" id="intro">
      <div className="intro__content">
        <p className="intro__eyebrow"><span /> Full-stack developer based in Atlanta</p>
        <h1>I build useful digital experiences with clarity and care.</h1>
        <p className="intro__role">I'm Terrell Hudson - a growing <strong ref={textRef} /></p>
        <p className="intro__copy">
          I turn ideas into approachable web experiences, combining technical curiosity,
          collaborative leadership, and a drive to keep learning.
        </p>
        <div className="intro__actions">
          <a className="button button--primary" href="#portfolio">View selected work <span>↗</span></a>
          <a className="button button--ghost" href="#contact">Get in touch</a>
        </div>
        <div className="intro__meta">
          <span>React</span><span>JavaScript</span><span>Node.js</span><span>MERN</span>
        </div>
      </div>

      <div className="intro__visual">
        <div className="intro__photo-wrap">
          <img src={Rell} alt="Terrell Hudson climbing outdoors" />
          <div className="intro__badge"><strong>Open to</strong><span>new opportunities</span></div>
        </div>
      </div>
    </section>
  );
}
