import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return <li><button className={active ? "portfolioList active" : "portfolioList"} type="button" onClick={() => setSelected(id)}>{title}</button></li>;
}
