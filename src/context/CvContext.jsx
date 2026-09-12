import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const CvContext = createContext();

export function CvProvider({ children }) {
  const [cvFile, setCvFile] = useState(null);
  const [cvText, setCvText] = useState(() => {
    return localStorage.getItem('patri_cv_text') || portfolioData.defaultCvText || '';
  });
  const [cvFileName, setCvFileName] = useState(() => {
    return localStorage.getItem('patri_cv_name') || 'patri-aparicio-cv.pdf';
  });
  const [cvUploadedAt, setCvUploadedAt] = useState(() => {
    return localStorage.getItem('patri_cv_date') || 'Agosto 2026';
  });
  const [isCvLoaded, setIsCvLoaded] = useState(true);

  const updateCv = (text, fileName, file = null) => {
    setCvText(text);
    setCvFileName(fileName);
    setCvFile(file);
    const now = new Date().toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    setCvUploadedAt(now);
    setIsCvLoaded(true);

    try {
      localStorage.setItem('patri_cv_text', text);
      localStorage.setItem('patri_cv_name', fileName);
      localStorage.setItem('patri_cv_date', now);
    } catch (e) {
      console.warn('LocalStorage limit exceeded for full CV text:', e);
    }
  };

  const clearCv = () => {
    setCvFile(null);
    setCvText('');
    setCvFileName('');
    setCvUploadedAt('');
    setIsCvLoaded(false);
    localStorage.removeItem('patri_cv_text');
    localStorage.removeItem('patri_cv_name');
    localStorage.removeItem('patri_cv_date');
  };

  return (
    <CvContext.Provider value={{
      cvFile,
      cvText,
      cvFileName,
      cvUploadedAt,
      isCvLoaded,
      updateCv,
      clearCv
    }}>
      {children}
    </CvContext.Provider>
  );
}

export function useCv() {
  const context = useContext(CvContext);
  if (!context) {
    throw new Error('useCv must be used within a CvProvider');
  }
  return context;
}
