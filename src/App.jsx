import { useEffect } from 'react';
import AOS from 'aos';
import Preloader from './components/Preloader';
import Particles from './components/Particles';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Story from './components/Story';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init();
    // images change the page height as they load; re-measure once everything is in
    const refresh = () => AOS.refresh();
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  return (
    <>
      <Preloader />
      <Particles />
      <div className="container">
        <Header />
        <Contacts />
        <Skills />
        <Story />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
