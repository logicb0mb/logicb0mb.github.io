import Icon from './Icon';
import { skillGroups } from '../data';

export default function Skills() {
  return (
    <section data-aos="fade-up" className="skills">
      <h2 className="heading-secondary">SKILLS</h2>
      {skillGroups.map((group) => (
        <div className="skill" key={group.title}>
          <div className="skill__heading">
            <Icon name={group.icon} className="skill__icon" />
            <h4 className="heading-4 heading-4--dark">{group.title}</h4>
          </div>
          <ul className="list">
            {group.items.map((item) => (
              <li className="list__item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
