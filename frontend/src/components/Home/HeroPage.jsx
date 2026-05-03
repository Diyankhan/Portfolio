import "./Home.css";
import NameAni from "../Animations/NameAni";
function HeroPage() {
  return (
    <div className="container HeroPage text-center text-md-start">
      <div className="row flex-column flex-column-reverse flex-md-row mb-md-5">
        <div className="col-lg-6 mt-5 ms-auto ">
          <h1 className="my-4">
            <NameAni />
          </h1>
          <p>
            I am a Full Stack Developer focused on building clean, responsive,
            and user-centered web applications. I continuously improve my
            problem-solving skills and strive to write efficient, scalable code.
            My goal is to grow into a highly skilled software engineer through
            discipline and consistent learning.
          </p>
          <a href="https://res.cloudinary.com/dgpnfehem/image/upload/fl_attachment/v1777750052/Diyankhan_agcvwk.pdf" download rel="noopener noreferrer">
            <button className="btn btn-danger my-3">Download Resume</button>
          </a>
        </div>
        <div className="col-lg-4 mt-5 text-center me-auto mb-md-5">
          <img
            src="https://res.cloudinary.com/dgpnfehem/image/upload/v1777744710/Diyankhan_eg2ddp.jpg"
            alt="Owner image"
            className="img-fluid my-img border rounded-circle"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
