import "./topbar.scss";

const links = [["Work", "portfolio"], ["About", "works"], ["Testimonials", "testimonials"], ["Contact", "contact"]];

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a href="#intro" className="logo" aria-label="Terrell Hudson home">TH<span>.</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, target]) => <a key={target} href={`#${target}`}>{label}</a>)}
        </nav>
        <a className="topbar__cta" href="mailto:dajuanhudson33@gmail.com">Let's talk</a>
        <button className={`hamburger ${menuOpen ? "active" : ""}`} type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
