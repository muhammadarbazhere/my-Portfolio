import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Arbaz</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">MERN Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
           Enthusiastic and self-motivated person with a strong grasp of MongoDB, Express, Node, and React.
            <br /> Actively seeking an internship opportunity to apply and enhance these skills.

          </p>
          <div><span><br /></span></div>
        </div>

        <a href="http://www.linkedin.com/in/arbaz-mern/" type="button" className="btn btn-primary linkedin" target="blank"> Check my LinkedIn 

       
        </a>

      </div>
      <div className="hero--section--img arbaz">
        <img src="./img/myImage.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
