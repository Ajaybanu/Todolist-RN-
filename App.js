import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PicklistScreen from './components/PicklistScreen';
import CustomerScreen from './components/CustomerScreen';
import ProductScreen from './components/ProductScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Picklist">
        <Stack.Screen name="Picklist" component={PicklistScreen} options={{ title: 'Picklist' }} />
        <Stack.Screen name="Customers" component={CustomerScreen} options={{ title: 'Customers' }} />
        <Stack.Screen name="Products" component={ProductScreen} options={{ title: 'Products' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
