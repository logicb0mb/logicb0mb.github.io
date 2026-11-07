import Icon from './Icon';

// Flip card: the front shows the project, hovering rotates to the back (CSS only).
export default function ProjectCard({ name, sup, image, github, tech }) {
  return (
    <div className="project" data-aos="fade-up">
      <div className="project__side project__side--front">
        <img src={image} className="project__img" alt={name} />
        <h5
          className={`project__name${name.length > 30 ? ' project__name--long' : ''}`}
        >
          {name}
          {sup && (
            <>
              {' '}
              <sup>{sup}</sup>{' '}
            </>
          )}
        </h5>
        {tech.map((t, i) => (
          <div
            key={t.label}
            className={`project__tech${i < 2 ? ' project__tech--top' : ''}`}
          >
            <Icon name={t.icon} />
            <p>{t.label}</p>
          </div>
        ))}
        <a className="btn project__btn" href={github}>
          Visit GitHub
        </a>
      </div>

      <div className="project__side project__side--back">
        <div className="project__cta">
          <div className="project__price-box">
            <a className="btn" href={github}>
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
