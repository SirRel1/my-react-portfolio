import "./menu.scss";

const items = [["Home", "intro"], ["Selected work", "portfolio"], ["About me", "works"], ["Testimonials", "testimonials"], ["Contact", "contact"]];

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <aside className={`menu ${menuOpen ? "active" : ""}`} aria-hidden={!menuOpen}>
      <nav aria-label="Mobile navigation">
        {items.map(([label, target], index) => (
          <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>{label}
          </a>
        ))}
      </nav>
      <div className="menu__footer">Available for thoughtful teams and ambitious products.</div>
    </aside>
  );
}
