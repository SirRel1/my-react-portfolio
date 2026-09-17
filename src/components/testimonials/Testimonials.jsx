import "./testimonials.scss";

const testimonials = [
  {
    name: "Priya M.",
    title: "Developer",
    initials: "PM",
    desc: "Hi Terrell, great job on this assignment! All your links work and I’m able to visit your app page without any errors.",
  },
  {
    name: "Kelley",
    title: "TA / Developer",
    initials: "K",
    desc: "Great job finishing project 2! You all did a great job on this, and you should be proud. Overall, the site looks good and works well. Keep up the good work!",
  },
  {
    name: "CG - RH",
    title: "Grader",
    initials: "CR",
    desc: "I can see your strong attention to detail and organization are very present in your work. You definitely have a strong and cohesive online presence here. Great job!",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <p className="section-kicker">Kind words</p>
      <h2 className="section-title">Feedback from people I've built and learned with.</h2>
      <div className="testimonials__grid">
        {testimonials.map((item) => (
          <article key={item.name}>
            <span className="quote">“</span>
            <p>{item.desc}</p>
            <div className="reviewer">
              <span className="avatar">{item.initials}</span>
              <div><strong>{item.name}</strong><small>{item.title}</small></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
