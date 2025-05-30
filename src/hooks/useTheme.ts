// filepath: c:\Users\deryd\Desktop\WORKSPACE\Personal Projects\ChillBreak\src\hooks\useTheme.ts

import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';

const useTheme = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme() || 'light');

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme);
        });

        return () => subscription.remove();
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
};

export default useTheme;