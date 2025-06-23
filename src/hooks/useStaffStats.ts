
import { useState, useEffect } from 'react';

interface StaffStats {
  activeCareProviders: number;
  scheduledEvents: number;
  learningResources: number;
  recognitionAwards: number;
}

export const useStaffStats = () => {
  const [stats, setStats] = useState<StaffStats>({
    activeCareProviders: 0,
    scheduledEvents: 0,
    learningResources: 0,
    recognitionAwards: 0
  });

  useEffect(() => {
    // Load stats from localStorage
    const savedStats = localStorage.getItem('staff-stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }

    // Count existing data
    const events = JSON.parse(localStorage.getItem('gallery-events') || '[]');
    const careProviders = JSON.parse(localStorage.getItem('care-providers') || '[]');
    const resources = JSON.parse(localStorage.getItem('learning-resources') || '[]');
    const awards = JSON.parse(localStorage.getItem('recognition-awards') || '[]');

    const newStats = {
      activeCareProviders: careProviders.length,
      scheduledEvents: events.length,
      learningResources: resources.length,
      recognitionAwards: awards.length
    };

    setStats(newStats);
    localStorage.setItem('staff-stats', JSON.stringify(newStats));
  }, []);

  const updateStats = () => {
    const events = JSON.parse(localStorage.getItem('gallery-events') || '[]');
    const careProviders = JSON.parse(localStorage.getItem('care-providers') || '[]');
    const resources = JSON.parse(localStorage.getItem('learning-resources') || '[]');
    const awards = JSON.parse(localStorage.getItem('recognition-awards') || '[]');

    const newStats = {
      activeCareProviders: careProviders.length,
      scheduledEvents: events.length,
      learningResources: resources.length,
      recognitionAwards: awards.length
    };

    setStats(newStats);
    localStorage.setItem('staff-stats', JSON.stringify(newStats));
  };

  return { stats, updateStats };
};
