
import { View, StatusBar } from 'react-native';

import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter"

import { Routes } from './src/routes';
import { Welcome } from './src/screens/welcome';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_900Black,
  })

  if (fontsLoaded) {
  } else {
    return
  }

  return (
    <>
      <Routes/>
      <StatusBar 
        animated={true}
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}/>
    </>
  );
}


