import { Fragment } from 'react';
import Icon from './Icon';
import { contacts } from '../data';

export default function Contacts() {
  return (
    <div data-aos="fade-down" className="contacts">
      <h3 className="heading-3">Quick Contacts</h3>
      <div className="contacts__list">
        {contacts.map((c) => (
          <Fragment key={c.label}>
            <Icon name={c.icon} className="contacts__icon" />
            <div className="contacts__details">
              <h4 className="heading-4 heading-4--light">{c.label}</h4>
              <p className="contacts__textlinks">
                <a href={c.href}>{c.text}</a>
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
