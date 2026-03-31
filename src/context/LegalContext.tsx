import React, { createContext, useContext, useState } from 'react';

type LegalPageType = 'terms' | 'privacy' | 'cookies' | 'refund' | 'legal' | null;

interface LegalContextType {
  activePage: LegalPageType;
  openLegalPage: (page: LegalPageType) => void;
  closeLegalPage: () => void;
}

const LegalContext = createContext<LegalContextType | undefined>(undefined);

export function LegalProvider({ children }: { children: React.ReactNode }) {
  const [activePage, setActivePage] = useState<LegalPageType>(null);

  const openLegalPage = (page: LegalPageType) => {
    setActivePage(page);
  };

  const closeLegalPage = () => {
    setActivePage(null);
  };

  return (
    <LegalContext.Provider value={{ activePage, openLegalPage, closeLegalPage }}>
      {children}
    </LegalContext.Provider>
  );
}

export function useLegal() {
  const context = useContext(LegalContext);
  if (context === undefined) {
    throw new Error('useLegal must be used within a LegalProvider');
  }
  return context;
}
