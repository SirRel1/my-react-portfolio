import "./topbar.scss"
import Person from '../../assets/images/black-man-icon.jpg';
import Email from '../../assets/images/mail-icon.png';




export default function Topbar() {
  return (
    <div className="topbar">
    <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">genius.</a>
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
            
        </div>
    </div>
    </div>
  )
}
