import { useState, useEffect } from 'react';

export const LanguageSelector = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  useEffect(() => {
    // Cargar idioma guardado del localStorage
    const savedLang = localStorage.getItem('language') as 'es' | 'en' | null;
    if (savedLang) {
      setLanguage(savedLang);
      document.documentElement.setAttribute('data-language', savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.setAttribute('data-language', newLang);
    
    // Recargar la página para aplicar las traducciones
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
      aria-label="Cambiar idioma / Change language"
    >
      <span className="text-sm font-medium text-white">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

