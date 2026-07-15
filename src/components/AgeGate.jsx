import { useEffect, useState } from 'react';
import { ShieldAlert } from 'lucide-react';

const STORAGE_KEY = 'cloudvape-age-confirmed';
const CONFIRMATION_DAYS = 7;

function AgeGate() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!stored?.expiresAt || stored.expiresAt < Date.now()) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const confirmAge = () => {
    const expiresAt = Date.now() + CONFIRMATION_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ expiresAt }));
    setIsVisible(false);
  };

  const exitSite = () => {
    window.location.assign('https://www.google.com');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/[0.85] px-4 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-cyan-300/25 bg-panel-gradient p-6 shadow-neon sm:p-8">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            <ShieldAlert aria-hidden="true" size={24} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Acceso restringido</p>
            <h2 id="age-gate-title" className="text-2xl font-semibold text-white sm:text-3xl">
              ¿Eres mayor de 18 años?
            </h2>
          </div>
        </div>
        <p className="text-base leading-7 text-slate-200">
          Este sitio contiene productos con nicotina. La nicotina es una sustancia adictiva.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button className="btn-primary justify-center" type="button" onClick={confirmAge}>
            Sí, ingresar
          </button>
          <button className="btn-secondary justify-center" type="button" onClick={exitSite}>
            No, salir
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgeGate;
