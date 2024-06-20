import { CredentialsContext } from './src/Components/CredentialsContext';
import RootStack from './src/navigation/RootStack';
import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import OnBoard from './src/Components/OnBoard';

SplashScreen.preventAutoHideAsync()
  .catch(e => console.log(e));

export default function App() {
  const [storedCredentials, setStoredCredentials] = useState("");
  const [showed, setShowed] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1500)
  })

  return (
    <>
      {showed ? (
        <OnBoard setShowed={setShowed} />
      ) : (

        <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
          <RootStack />
        </CredentialsContext.Provider>
      )}
    </>
  );;
}