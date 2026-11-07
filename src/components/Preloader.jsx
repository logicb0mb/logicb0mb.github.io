import { useEffect, useState } from 'react';

// Shows the CSS loader until the window has fully loaded, then fades it out
// (the original used jQuery's fadeOut('slow'), i.e. 600ms).
export default function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let timer;
    const done = () => {
      setHiding(true);
      timer = setTimeout(() => setGone(true), 600);
    };
    if (document.readyState === 'complete') {
      done();
    } else {
      window.addEventListener('load', done);
    }
    return () => {
      window.removeEventListener('load', done);
      clearTimeout(timer);
    };
  }, []);

  if (gone) return null;
  return <div className={`se-pre-con${hiding ? ' se-pre-con--hide' : ''}`} />;
}
