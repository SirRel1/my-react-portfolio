import { useState } from "react";
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "../../data";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

const collections = { featured: featuredPortfolio, web: webPortfolio, mobile: mobilePortfolio };
const tabs = [["featured", "Featured"], ["web", "Web apps"], ["mobile", "All projects"]];

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const projects = collections[selected];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__header">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title">Projects built to solve, teach, and connect.</h2>
        </div>
        <p className="section-copy">A selection of applications from my journey as a developer. Explore the live experiences or look under the hood on GitHub.</p>
      </div>

      <ul className="portfolio__filters" aria-label="Project categories">
        {tabs.map(([id, title]) => <PortfolioList key={id} id={id} title={title} active={selected === id} setSelected={setSelected} />)}
      </ul>

      <div className="portfolio__grid">
        {projects.map((project, index) => (
          <article className="project-card" key={`${selected}-${project.id}`}>
            <a className="project-card__image" href={project.href || project.git || "#portfolio"} target="_blank" rel="noreferrer">
              <img src={project.img} alt={`${project.title} preview`} />
              <span>0{index + 1}</span>
            </a>
            <div className="project-card__body">
              <p>Web development</p>
              <h3>{project.title}</h3>
              <div className="project-card__links">
                {project.href && <a href={project.href} target="_blank" rel="noreferrer">Live site ↗</a>}
                {project.git && <a href={project.git} target="_blank" rel="noreferrer">Source code ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
