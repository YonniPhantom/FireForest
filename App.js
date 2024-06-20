import { CredentialsContext } from './src/Components/CredentialsContext';
import RootStack from './src/navigation/RootStack';
import react, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()
  .catch(e => console.log(e));

export default function App() {
  const [storedCredentials, setStoredCredentials] = useState("");

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1500)
  })

  return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
      <RootStack />
    </CredentialsContext.Provider>
  );;
}