import { navLinks } from '../data';

export default function Footer() {
  return (
    <section data-aos="zoom-in" className="footer">
      <ul className="nav">
        {navLinks.map((l) => (
          <li className="nav__item" key={l.label}>
            <a href={l.href} className="nav__link">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        Built with 💖 and loads of{' '}
        <span title="Try FireFox Grid Inspector to know how many 😉">
          {' '}
          CSS GRIDS! 😁{' '}
        </span>
        <span style={{ display: 'block' }}>
          &copy; Copyright {new Date().getFullYear()} by Shreyas Shukla
        </span>
      </p>
    </section>
  );
}
