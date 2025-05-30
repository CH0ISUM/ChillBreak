# ChillBreak

ChillBreak is a countdown timer application built using React Native for Windows. This application allows users to set work and rest durations, start, pause, and resume the timer, and switch between light and dark themes.

## Project Structure

The project is organized into the following main directories and files:

- **src/**: Contains all the source code for the React Native application.
  - **App.tsx**: Main entry point for the application, setting up the structure and navigation.
  - **components/**: Contains reusable components such as buttons, theme toggles, and timer displays.
  - **constants/**: Holds string constants and theme definitions used throughout the application.
  - **context/**: Manages the timer state using React Context API.
  - **hooks/**: Custom hooks for managing theme and timer logic.
  - **navigation/**: Sets up the navigation structure for the application.
  - **screens/**: Contains the main screens of the application, including the home and settings screens.
  - **types/**: TypeScript definitions related to the timer functionality.
  - **utils/**: Utility functions for formatting time and managing local storage.

- **windows/**: Contains the Windows-specific implementation files.
  - **ChillBreak/**: Main application logic for the Windows platform, integrating React Native components with the Windows UI.
  - **ChillBreak.sln**: Solution file for the Windows application.

## Features

- Countdown timer with start, pause, and resume functionality.
- Light and dark theme toggle.
- User-friendly interface for setting work and rest durations.
- Notifications for timer completion.

## Getting Started

To run the application, clone the repository and install the necessary dependencies. Follow the instructions in the `README.md` file located in the root directory for setup and usage details.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.