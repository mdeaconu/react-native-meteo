import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './App.style';
import { ImageBackground } from 'react-native';
import backgroundImage from "./assets/background.png";
import Home from './pages/Home/Home';

const App = () => {
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
