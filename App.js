import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './App.style';
import { ImageBackground } from 'react-native';
import backgroundImage from "./assets/background.png";
import Home from './pages/Home/Home';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

const App = () => {
  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    getUserCoordinates();
  }, []);

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
    <ImageBackground imageStyle={s.image} style={s.imageBackground} source={backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
