// filepath: c:\Users\deryd\Desktop\WORKSPACE\Personal Projects\ChillBreak\src\screens\SettingsScreen.tsx

import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { strings } from '../constants/strings';

const SettingsScreen = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
            <Text style={isDarkMode ? styles.textDark : styles.textLight}>
                {strings.settingsTitle}
            </Text>
            <View style={styles.themeToggleContainer}>
                <Text style={isDarkMode ? styles.textDark : styles.textLight}>
                    {strings.themeToggleLabel}
                </Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleTheme}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    containerDark: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
    },
    textLight: {
        color: '#000',
    },
    textDark: {
        color: '#fff',
    },
    themeToggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default SettingsScreen;