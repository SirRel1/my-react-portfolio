import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "- Priya M.",
      title: "Developer",
      img:
        "https://www.clipartmax.com/png/small/293-2931307_account-avatar-male-man-person-profile-icon-profile-icons.png",
      icon: "",
      desc:
        "Hi Terrell, great job on this assignment! All your links work and I’m able to visit your app page without any errors.",
    },
    {
      id: 2,
      name: "Kelley",
      title: "TA / Developer",
      img:
        "https://cdn5.vectorstock.com/i/1000x1000/72/59/female-avatar-profile-icon-round-african-american-vector-18307259.jpg",
      icon: "assets/youtube.png",
      desc:
        "Great job finishing project 2! You all did a great job on this, and you should be proud. Overall, the site looks good and works well. Keep up the good work!",
      featured: true,
    },
    {
      id: 3,
      name: "CG - RH",
      title: "Grader",
      img:
        "https://www.wolfhooker.com/wp-content/uploads/2019/02/176-1763433_user-account-profile-avatar-person-male-icon-icon-user-account.png.jpeg",
      icon: "assets/linkedin.png",
      desc:
        " I can see your strong attention to detail and organization are very present in your work. You definitely have a strong and cohesive online presence here. Great job!",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}