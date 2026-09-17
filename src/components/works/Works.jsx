import Icon from "../../assets/images/black-man-icon.jpg";
import "./works.scss";

const strengths = [
  ["01", "Build", "Turning ideas into practical, responsive web experiences."],
  ["02", "Collaborate", "Bringing team leadership and thoughtful communication to the work."],
  ["03", "Grow", "Continuously sharpening my MERN stack and software engineering skills."],
];

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="works__story">
        <p className="section-kicker">About me</p>
        <h2 className="section-title">Curious by nature. Grounded by teamwork.</h2>
        <p className="section-copy">
          I'm an aspiring web developer and software engineer based in Atlanta, Georgia, originally from Detroit, Michigan. I continue to sharpen my MERN stack skills through hands-on projects and a commitment to learning.
        </p>
        <div className="works__identity">
          <img src={Icon} alt="Terrell Hudson avatar" />
          <div><strong>Terrell Hudson</strong><span>Web Developer / Software Engineer</span></div>
        </div>
      </div>
      <div className="works__cards">
        {strengths.map(([number, title, copy]) => (
          <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
        ))}
      </div>
    </section>
  );
}
