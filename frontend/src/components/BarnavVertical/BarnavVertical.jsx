import alterbody from "../../assets/altere-body.svg";
import cyclingsport from "../../assets/cyclingsport.svg";
import swimming from "../../assets/swimming.svg";
import yoga from "../../assets/yoga.svg";
import "./barnavvertical.css";

export default function  BarnavVertical() {
  return (
    <aside className=" BarnavVertical">
      <nav className="BarnavVertical-nav">
        <a className="BarnavVertical-nav-logo" href="/">
          <img src={yoga} alt="Yoga Logo" />
        </a>
        <a className="BarnavVertical-nav-logo" href="/">
          <img src={swimming} alt="Swimming Logo" />
        </a>
        <a className="BarnavVertical-nav-logo" href="/">
          <img src={cyclingsport} alt="cyclingsport Logo" />
        </a>
        <a className="BarnavVertical-nav-logo" href="/">
          <img src={alterbody} alt="alterbody Logo" />
        </a>
      </nav>
      <p className="BarnavVertical-text">Copyright, SportSee 2023</p>
    </aside>
  );
}


