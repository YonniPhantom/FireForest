import { createContext } from 'react';

export const CredentialsContext = createContext({ credentials: {}, setCredentials: () => {}});