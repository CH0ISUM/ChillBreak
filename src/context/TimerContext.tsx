import React, { createContext, useContext, useState, useEffect } from 'react';

interface TimerContextType {
  time: number;
  isRunning: boolean;
  startTimer: (duration: number) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  resetTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startTimer = (duration: number) => {
    setTime(duration);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

  const resumeTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(id);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning && time > 0) {
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(id);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [isRunning, time]);

  return (
    <TimerContext.Provider value={{ time, isRunning, startTimer, pauseTimer, resumeTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};