import { useState, useEffect } from 'react';
import { initialData } from '../data/initialData';

const STORAGE_KEY = 'portfolio_data';

export const usePortfolioData = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved data", e);
        return initialData;
      }
    }
    return initialData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateData = (newData) => {
    setData(newData);
  };

  const updateSection = (section, sectionData) => {
    setData(prev => ({
      ...prev,
      [section]: sectionData
    }));
  };

  const resetData = () => {
    setData(initialData);
  };

  return { data, updateData, updateSection, resetData };
};
