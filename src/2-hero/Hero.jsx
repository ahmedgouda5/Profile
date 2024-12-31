import "./hero.css";
import avatar from "./img/Ahmed.png";
import Lottie from "lottie-react";
import dev from "../animation/dev.json";

const Hero = () => {
  return (
    <section className="flex mt-20 contain">
      <div className="left_section flex-1">
        <div className="image_avatar flex gap-2 items-center">
          <img
            src={avatar}
            className="w-28 Avatar"
            alt="Profile Avatar of Ahmed"
          />
          {/* <i className="verified text-sky-500 fa-solid fa-circle-check"></i> */}
        </div>
        <h1>Software Enginner specialist in frontend developer .</h1>
        <p>
          I’m Ahmed Abdel Gawad, a frontend developer based in Egypt. I specialize in
          building responsive, user-friendly web applications using modern
          technologies like React.js and Tailwind CSS. My passion lies in
          transforming creative ideas into functional digital experiences that
          solve real-world problems.
        </p>
        <div className="social_icon flex items-center gap-7 text-2xl cursor-pointer">
          <a
            href="https://www.linkedin.com/in/ahmed-gouda-b2a264251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/ahmedgouda5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/a7med__gouda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100027833470339"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="right_section pl-20 animation w-1/2 hidden  md:block">
        <Lottie animationData={dev} loop={true} />
      </div>
    </section>
  );
};

export default Hero;
