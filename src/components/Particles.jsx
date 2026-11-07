import { useEffect } from 'react';

const base = import.meta.env.BASE_URL;
let particlesLibPromise;

// The original particles.js library (public/particles.js) is a classic script
// that sets window.particlesJS, so it is loaded on demand.
function loadParticlesLib() {
  if (typeof window.particlesJS === 'function') return Promise.resolve();
  if (!particlesLibPromise) {
    particlesLibPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `${base}particles.js`;
      script.onload = () => {
        if (typeof window.particlesJS === 'function') {
          resolve();
        } else {
          particlesLibPromise = undefined;
          reject(new Error('particles.js loaded without exposing particlesJS'));
        }
      };
      script.onerror = () => {
        particlesLibPromise = undefined;
        reject(new Error(`failed to load ${script.src}`));
      };
      document.head.appendChild(script);
    });
  }
  return particlesLibPromise;
}

// Runs the original library with the original config (public/assets/particlesjs.json).
export default function Particles() {
  useEffect(() => {
    let cancelled = false;

    Promise.all([
      loadParticlesLib(),
      fetch(`${base}assets/particlesjs.json`).then((res) => res.json()),
    ])
      .then(([, config]) => {
        if (!cancelled) window.particlesJS('particles-js', config);
      })
      .catch((err) => console.error('particles failed to start', err));

    return () => {
      cancelled = true;
      (window.pJSDom || []).forEach((p) => p.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
    };
  }, []);

  return <div id="particles-js" />;
}
