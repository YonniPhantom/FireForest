import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CredentialsContext } from "../Components/CredentialsContext";
import Login from "../screens/Auth/Login";

const Stack = createNativeStackNavigator();

export default function RootStack() {
    return (
        <CredentialsContext.Consumer>
            {({ storedCredentials }) => (
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="Login">
                        {storedCredentials ? (
                            <></>
                        ) : (
                            <Stack.Screen name="Login" component={Login} />
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
    )
}