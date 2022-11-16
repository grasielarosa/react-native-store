# 📦 Stock manager

## Installation

### Pre requisites

Follow the [official react native guide](https://reactnative.dev/docs/environment-setup) to install the required software in order to execute a React Native application.
❗️Make sure to select **React Native CLI Quickstart** instead of Expo Go Quickstart to get the correct instructions.

### Clone the repository

Clone this repository in your device running the following command:
`git clone https://github.com/qbueno/stockmanager.git`

### Install the dependencies

Execute the following command in the root of the cloned repository:  
`yarn install`  
_This command installs the dependencies required to run the application_

If you are running the application in macOS and plan to run it with iOS simulator, you also have to execute the following command `pod install`

### Run the application

Verify that everything is working fine running the application  
To execute Android (You need to previously have configured an emulator, or have a phone connected in debug mode)  
`yarn android`

To execute iOS (You need a valid simulator, only available using macOS)  
`yarn ios`

## Structure of the app

Project components are split into containers and components (Presentation and containers components). Check this article written by Dan Abramov to know more: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

- android: Android platform specific files.
- assets: Contains the different images used through the app.
- ios: iOS platform specific files.
- src: App source files
  - home: Contains the containers and components regarding the Home screen loaded at the beginning.
  - mocks: Export an array with the test object used to simulate the data received from some backend.
  - store: Contains the containers and components related to the different stores.
  - StoresContext.js: This file contains the providers and the reducer used to modify the stores. (📝 Useful documentation: https://beta.reactjs.org/apis/react/useContext)
- App.js: Main entry of the App, configures the theme, required providers and the navigation container.

## App screens

HomeScreen  
<img src="https://user-images.githubusercontent.com/9643358/202224279-5bdb2541-e012-4ce4-8314-b90bcd192129.png" width="250">

StoreScreen  
<img src="https://user-images.githubusercontent.com/9643358/202224564-064596b2-93c0-4e27-ae30-77d6177e3ff5.png" width="250">

## Libraries used

The following libraries are already used and configured in the App to simplify the development

- React Navigation (https://reactnavigation.org/): Used to navigate and pass data to different screens.
- React Native Paper (https://callstack.github.io/react-native-paper/): UI library used to simplify the usage of existing components.
- PropTypes: Used to determine the type of the data received in the component props.
