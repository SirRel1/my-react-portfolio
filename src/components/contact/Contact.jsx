import { useState } from "react";
import "./contact.scss";
import Git from "../../assets/images/GitHub-Mark.png"
import Gmail from "../../assets/images/gmail_icon.png"
import LinkedIn from "../../assets/images/linked.png"
import Twitter from "../../assets/images/twitter.png"

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
      
		<div id="contact" class="">
			<h2>Contact Me:</h2>
			<div class="getInTouch">
				<a href="https://twitter.com/t_rell26"
					><img class="getInTouch" src={Twitter} alt=""
				/></a>
			</div>
			<div class="getInTouch">
				<a href="https://www.linkedin.com/in/terrell-hudson-2574721a2/"
					><img class="getInTouch" src={LinkedIn} alt=""
				/></a>
			</div>
			<div class="getInTouch">
				<a
					href="https://mail.google.com/mail/?view=cm&source=mailto&to=dajuanhudson33@gmail.com"
					><img class="getInTouch" src={Gmail} alt=""
				/></a>
			</div>
			<div class="getInTouch">
				<a href="https://github.com/SirRel1"
					><img
						class="getInTouch"
						src={Git}
						alt="git hub logo"
				/></a>
			</div>
			<div>
				<b>My Resume: </b>
				<a
					href="./assets/images/Terrell D Hudson Resume Update 2022 .pdf"
					download="Terrell's Resume"
					>Download The pdf
          </a>
			</div>
		</div>

      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}