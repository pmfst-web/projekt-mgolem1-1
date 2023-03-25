import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import { TabBarIcon } from './components/TabBarIcon';

import { theme } from './constants/theme';
import NewBillPage from './screens/NewBillPage'

import store from './store/reducers/racuni';
import { Provider } from 'react-redux';
import HomePage from './screens/HomePage';
import TransactionPage from './screens/TransactionPage'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(
);

const tabEkrani = () => {
  return (
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.card,
          },
        }}>
        
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="home" />,
          }}
          name="Home"
          component={HomePage}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="add" />,
          }}
          name="Novi račun"
          component={NewBillPage}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="wallet" />,
          }}
          name="Transakcije"
          component={TransactionPage}
        />
      </Tab.Navigator>
  );
};


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomePage"
            component={tabEkrani}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
