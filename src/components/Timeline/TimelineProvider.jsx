'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = window.localStorage.getItem('keenkeeper-timeline');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setEntries(parsed);
        }
      } catch (error) {
        console.error('Failed to parse timeline from localStorage', error);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('keenkeeper-timeline', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries((prev) => [{ ...entry, id: Date.now() }, ...prev]);
  };

  const resetEntries = () => setEntries([]);

  const value = useMemo(
    () => ({ entries, addEntry, resetEntries }),
    [entries]
  );

  return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>;
}

export function useTimeline() {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('useTimeline must be used within a TimelineProvider');
  }
  return context;
}
