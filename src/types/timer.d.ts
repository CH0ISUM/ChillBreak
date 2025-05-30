// filepath: c:\Users\deryd\Desktop\WORKSPACE\Personal Projects\ChillBreak\src\types\timer.d.ts

interface Timer {
    duration: number; // total duration in seconds
    remaining: number; // remaining time in seconds
    isActive: boolean; // indicates if the timer is currently running
    isPaused: boolean; // indicates if the timer is paused
}

interface TimerContextType {
    timer: Timer;
    startTimer: (duration: number) => void;
    pauseTimer: () => void;
    resumeTimer: () => void;
    resetTimer: () => void;
}