import { useState, useEffect } from 'react';

const useTimer = (initialTime: number) => {
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, isPaused]);

    const startTimer = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const pauseTimer = () => {
        setIsPaused(true);
    };

    const resumeTimer = () => {
        setIsPaused(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setIsPaused(false);
        setTime(initialTime);
    };

    return {
        time,
        isActive,
        isPaused,
        startTimer,
        pauseTimer,
        resumeTimer,
        resetTimer,
    };
};

export default useTimer;