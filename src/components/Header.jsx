import { resumeUrl } from '../data';

export default function Header() {
  return (
    <header data-aos="fade-down" id="header" className="header">
      {/* keeps the original (empty) logo slot so the header grid rows line up */}
      <div className="header__logo" aria-hidden="true" />
      <h3 className="heading-3">👋Hi I am, </h3>
      <h1 className="heading-1">
        <span className="megrim"> Shreyas Shukla </span> !
      </h1>
      <a href={resumeUrl}>
        <button className="btn header__btn"> Download Resume </button>
      </a>
    </header>
  );
}
