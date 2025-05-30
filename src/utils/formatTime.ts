// filepath: c:\Users\deryd\Desktop\WORKSPACE\Personal Projects\ChillBreak\src\utils\formatTime.ts

export const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};