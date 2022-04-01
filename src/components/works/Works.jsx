import { useState } from "react";
import "./works.scss";
import Icon from "../../assets/images/black-man-icon.jpg"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: {Icon},
      title: "Web Developer",
      desc:
        "I am an aspiring Web Developer/ Software Engineer residing in Atlanta Georgia. I'm currently sharpening my MERN Stack skills at Georgia Tech Web Developer Bootcamp. I'm originally from Detroit, Michigan.",
      img:
        {Icon},
    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={Icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>More to know</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://sirrel1.github.io/portfolio-homework/css/Me.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}