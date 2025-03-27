import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './App.style';
import { Alert, ImageBackground } from 'react-native';
import backgroundImage from "./assets/background.png";
import Home from './pages/Home/Home';
import Forecasts from './pages/Forecasts/Forecasts';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MeteoAPI } from './api/meteo';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  }
};

const App = () => {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coords) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords)
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords(coords) {
    const cityResponse = await MeteoAPI.fetchCityByCoords(coords)
    setCity(cityResponse);
  }

  async function fetchCoordsByCity(city) {
    try {
      const coordsResponse = await MeteoAPI.fetchCoordsByCity(city)
      setCoordinates({
        lat: coordsResponse.latitude,
        lng: coordsResponse.longitude
      });
    } catch (error) {
      Alert.alert("Aouch !", error);
    }
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    } else {
      setCoordinates({ lat: "48.85", lng: "2.35" }); // default coordinates
    }
  }
  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        imageStyle={s.image}
        style={s.imageBackground}
        source={backgroundImage}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded && weather &&
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false, animation: "fade" }}
              >
                <Stack.Screen name="Home">
                  {() => (
                    <Home
                      city={city}
                      weather={weather}
                      onSubmitSearch={fetchCoordsByCity}
                    />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            }
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
};

export default App;
