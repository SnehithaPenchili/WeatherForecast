
# Weather Forecast website


A simple web application to display weather forecasts for various locations.
## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)
- [Documentation](#documentation)

## Description
The WeatherForecast website provides users with current weather conditions and a 5-day forecast for specified locations. It fetches weather data from a weather API and presents it in a user-friendly interface.

## Features
- Display current weather conditions including temperature, humidity, wind speed, and weather description.
- Show a 5-day weather forecast with highs and lows for each day.
- Search functionality to find weather forecasts for different locations.
- Responsive design to ensure usability across devices.

## Technologies Used
- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (ES6+)
- Bootstrap (optional, if used in your project)
- Axios (for making API requests)
- Weather API (e.g., OpenWeatherMap, Weatherstack, etc.)



## Screenshots

![Screenshot (111)](https://github.com/SnehithaPenchili/WeatherForecast/assets/172914956/4e563449-3a69-475a-8a95-9d171660eac5)


## Installation

+ Insatll node.js from the chrome browser

1.Install create-react-app with npx

```bash
  npx create-react-app weather 
```
2.Navigate into the project directory:


```bash
cd WeatherForecast

```
3.Install dependencies (if any):
```bash
npm install

```
4.Obtain an API key from OpenWeatherMap or another weather API provider and replace <YOUR_API_KEY> in scripts.js with your API key.
5.Start the development server:
```bash
If you're using npm
npm start
```
6.Open your browser and navigate to http://localhost:3000 to view the website.

## Usage
+ Enter the name of a city or a ZIP code in the search bar to get weather information.
+ Click on the search button or press Enter to display weather data for the specified location.
+ Scroll down to see the 5-day weather forecast.



## Acknowledgements

- Bootstrap - Front-end framework used for styling.
- OpenWeatherMap - Weather API used for fetching weather data.
- Icons made by FontAwesome - Icons used in the project.



## Documentation

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

