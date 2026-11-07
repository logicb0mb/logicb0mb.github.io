import jsMeme from '../assets/img/jsmeme.jpg';
import { story } from '../data';

export default function Story() {
  return (
    <>
      <div data-aos="zoom-in" className="story__pictures" />
      <div data-aos="zoom-in" className="story__content">
        <h3 className="heading-3 mb-sm">{story.intro}</h3>
        <h2 className="heading-2 heading-2--dark mb-sm">
          &ldquo;{story.role}
          <span className="emoji">{story.roleEmoji}</span> &rdquo;
        </h2>
        <p className="story__text">
          {story.text} <span className="emoji">{story.textEmoji}</span>{' '}
          <span className="mb-sm" style={{ display: 'block' }}>
            <span className="memetext"> {story.memeCaption} </span>
          </span>
          <img className="story__jsmeme" src={jsMeme} alt="Meme: The HTML doesn't need to load JS and CSS, if the HTML and CSS are in JS" />
        </p>
        <button className="btn">
          <a href={story.githubUrl}> Checkout my GitHub</a>
        </button>
      </div>
    </>
  );
}
