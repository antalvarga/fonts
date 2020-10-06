import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';

import {useFonts
        , Raleway_200ExtraLight
        , Raleway_400Regular
        , Raleway_900Black
        
      } from '@expo-google-fonts/raleway';

export default function App() {

  let [fontsLoaded, error] = useFonts({
    Raleway_200ExtraLight
    , Raleway_400Regular
    , Raleway_900Black

    , 'Roboto-Light': require('./assets/fonts/Roboto/Roboto-Light.ttf')
    , 'Lobster-Regular': require('./assets/fonts/Lobster/Lobster-Regular.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />;

  }


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22}}>Open up App.tsx</Text>
      <Text style={{fontFamily: 'Raleway_200ExtraLight', fontSize:22}}>2Open up App.tsx</Text>
      <Text style={{fontFamily: 'Raleway_400Regular', fontSize:22}}>Open up App.tsx</Text>
      <Text style={{fontFamily: 'Raleway_900Black', fontSize:22}}>Open up App.tsx</Text>

      <Text style={{fontFamily: 'Roboto-Light', fontSize:22}}>Open up App.tsx</Text>
      <Text style={{fontFamily: 'Lobster-Regular', fontSize:22}}>Open up App.tsx</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
