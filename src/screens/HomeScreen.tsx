import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TimerContext } from '../context/TimerContext';
import TimerDisplay from '../components/TimerDisplay';

const HomeScreen = () => {
  const { startTimer, pauseTimer, resumeTimer, timerState } = useContext(TimerContext);
  const [workDuration, setWorkDuration] = useState('25');
  const [restDuration, setRestDuration] = useState('5');

  const handleStart = () => {
    startTimer(Number(workDuration) * 60); // Convert minutes to seconds
  };

  return (
    <View style={styles.container}>
      <TimerDisplay />
      <TextInput
        style={styles.input}
        placeholder="Work Duration (min)"
        keyboardType="numeric"
        value={workDuration}
        onChangeText={setWorkDuration}
      />
      <TextInput
        style={styles.input}
        placeholder="Rest Duration (min)"
        keyboardType="numeric"
        value={restDuration}
        onChangeText={setRestDuration}
      />
      <Button title="Start" onPress={handleStart} />
      <Button title="Pause" onPress={pauseTimer} />
      <Button title="Resume" onPress={resumeTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    width: '80%',
    paddingHorizontal: 8,
  },
});

export default HomeScreen;