import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CredentialsContext } from "../Components/CredentialsContext";

const Stack = createNativeStackNavigator();

import Login from "../screens/Auth/Login";
import HelloWorld from '../screens/HelloWorld';

export default function RootStack() {
    return (
        <CredentialsContext.Consumer>
            {({ storedCredentials }) => (
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="Login">
                        {storedCredentials ? (
                            <Stack.Screen options={{ headerShown: false}} name='Home' component={HelloWorld} />
                        ) : (
                            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
    )
}