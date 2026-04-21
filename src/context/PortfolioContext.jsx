import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialData } from '../data/initialData';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolio_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge initialData with parsed data to ensure new fields are present
        return {
          ...initialData,
          ...parsed,
          // Deep merge for nested objects if necessary
          about: { ...initialData.about, ...parsed.about },
          experience: { ...initialData.experience, ...parsed.experience },
          hero: { ...initialData.hero, ...parsed.hero },
          footer: { ...initialData.footer, ...parsed.footer }
        };
      } catch (e) {
        return initialData;
      }
    }
    return initialData;
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('portfolio_history');
    return saved ? JSON.parse(saved) : [];
  });

  const [activity, setActivity] = useState(() => {
    const saved = localStorage.getItem('portfolio_activity');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('portfolio_data', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem('portfolio_history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('portfolio_activity', JSON.stringify(activity));
  }, [activity]);

  const logActivity = () => {
    const today = new Date().toISOString().split('T')[0];
    setActivity(prev => ({
      ...prev,
      [today]: (prev[today] || 0) + 1
    }));
  };

  const updateSection = (section, sectionData) => {
    // Save to history before updating
    setHistory(prev => {
      const newHistory = [{ 
        timestamp: new Date().toISOString(), 
        data: JSON.parse(JSON.stringify(data)), // Deep copy 
        section 
      }, ...prev];
      return newHistory.slice(0, 10); // Keep last 10 versions
    });

    setData(prev => ({
      ...prev,
      [section]: sectionData
    }));
    
    logActivity();
  };

  const restoreVersion = (versionData) => {
    setData(versionData);
    logActivity();
  };

  const resetData = () => {
    setData(initialData);
    setHistory([]);
    setActivity({});
    localStorage.removeItem('portfolio_data');
    localStorage.removeItem('portfolio_history');
    localStorage.removeItem('portfolio_activity');
  };

  return (
    <PortfolioContext.Provider value={{ 
      data, 
      localData: data, // for backward compatibility in some components
      updateSection, 
      resetData, 
      history, 
      restoreVersion,
      activity 
    }}>
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
