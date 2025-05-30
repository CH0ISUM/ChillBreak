// filepath: c:\Users\deryd\Desktop\WORKSPACE\Personal Projects\ChillBreak\src\utils\storage.ts

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@timer_settings';

export const saveTimerSettings = async (settings) => {
    try {
        const jsonValue = JSON.stringify(settings);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
        // saving error
        console.error("Error saving timer settings:", e);
    }
};

export const getTimerSettings = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.error("Error retrieving timer settings:", e);
    }
};