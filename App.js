import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/tabNavigation';
import LoginScreen from './src/Screen/LoginScreen';
import {Provider} from "react-redux"
import { store } from './src/redux/Store';
import OrderFood from './src/Screen/OrderFood';



function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false, }}
        />
         <Stack.Screen name="OrderFood"
          component={OrderFood}
          options={{ headerShown: false, }}
        />
      </Stack.Navigator>
    </NavigationContainer>
     </Provider>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
