import './topbar.scss';
import Person from '../../assets/images/black-man-icon.jpg';
import Email from '../../assets/images/mail-icon.png';

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={'topbar ' + (menuOpen && 'active')}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						relic.
					</a>
					<div className="itemContainer">
						<img src={Person} className="icon" />
						<span>@SirRel1</span>
					</div>
					<div className="itemContainer">
						<img src={Email} className="icon2" />
						<span>dajuanhudson33@gmail.com</span>
					</div>
				</div>

				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
}
