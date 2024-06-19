import { CredentialsContext } from './src/Components/CredentialsContext';
import RootStack from './src/navigation/RootStack';
import react, { useState } from 'react';

export default function App() {
  const [storedCredentials, setStoredCredentials] = useState("");

  return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
      <RootStack />
    </CredentialsContext.Provider>
  );;
}