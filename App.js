import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { SignUp , Welcome, SignIn } from "../../Bai7/screens";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen 
                name='Welcome' 
                component={Welcome}
                option={{
                    headerShown:false
                }}
            />
            <Stack.Screen>
              name='Sign in'
              component={SignIn}
              option={{
                    headerShown:false
                }}
            </Stack.Screen>
            <Stack.Screen>
              name='Sign up'
              component={SignUp}
              option={{
                    headerShown:false
                }}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
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
