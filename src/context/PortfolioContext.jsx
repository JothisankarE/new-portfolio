import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialData } from '../data/initialData';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolio_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialData;
      }
    }
    return initialData;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_data', JSON.stringify(data));
  }, [data]);

  const updateSection = (section, sectionData) => {
    setData(prev => ({
      ...prev,
      [section]: sectionData
    }));
  };

  const resetData = () => {
    setData(initialData);
  };

  return (
    <PortfolioContext.Provider value={{ data, setData, updateSection, resetData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
