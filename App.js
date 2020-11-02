import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { AppLoading } from 'expo'
import RootDrawerNavigation from './routes/Drawer'
// import fonts
import * as Font from 'expo-font'


const getFonts = () => Font.loadAsync({
    'SourceSansProRegular' : require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'SourceSansProSemiBold' : require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
  })



export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false)

  if(fontsLoaded) {
    return (
      <RootDrawerNavigation />
    );
  } else {
    return(
     <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
     />
    ) 
  }
}
