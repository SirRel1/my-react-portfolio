import Git from "../../assets/images/GitHub-Mark.png";
import Gmail from "../../assets/images/gmail_icon.png";
import LinkedIn from "../../assets/images/linked.png";
import Twitter from "../../assets/images/twitter.png";
import Resume from "../../assets/images/Terrell D Hudson Resume Update 2022 .pdf";
import "./contact.scss";

const socials = [
  ["GitHub", "https://github.com/SirRel1", Git],
  ["LinkedIn", "https://www.linkedin.com/in/terrell-hudson-2574721a2/", LinkedIn],
  ["Twitter", "https://twitter.com/t_rell26", Twitter],
  ["Email", "mailto:dajuanhudson33@gmail.com", Gmail],
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__panel">
        <p className="section-kicker">Let's connect</p>
        <h2>Have an opportunity, idea, or project in mind?</h2>
        <p>I'm always interested in thoughtful work, collaborative teams, and new challenges.</p>
        <div className="contact__actions">
          <a className="contact__primary" href="mailto:dajuanhudson33@gmail.com">Start a conversation ↗</a>
          <a href={Resume} download="Terrell-Hudson-Resume.pdf">Download resume</a>
        </div>
      </div>

      <footer className="contact__footer">
        <a className="footer-logo" href="#intro">TH<span>.</span></a>
        <div className="socials">
          {socials.map(([label, href, icon]) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}>
              <img src={icon} alt="" /><span>{label}</span>
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Terrell Hudson</p>
      </footer>
    </section>
  );
}
