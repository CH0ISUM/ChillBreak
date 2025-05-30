import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTimer } from '../hooks/useTimer';

const TimerDisplay = () => {
    const { timeLeft, isActive } = useTimer();

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>
                {isActive ? formatTime(timeLeft) : 'Timer Paused'}
            </Text>
        </View>
    );
};

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
});

export default TimerDisplay;