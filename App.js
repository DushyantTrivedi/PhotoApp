import React from 'react';
import HomeComponent from './src/components/Home/HomeComponent';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhotoComponent from './src/components/Photo/PhotoComponent';

const store = configureStore();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store = { store }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeComponent}
          />
          <Stack.Screen name="Photo" component={PhotoComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
