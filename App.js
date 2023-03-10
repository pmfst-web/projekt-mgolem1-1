import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { TabBarIcon } from './components/TabBarIcon';

import { theme } from './constants/theme';
import NewBillPage from './screens/NewBillPage'
import DetailsPage from './screens/DetailsPage';

import { createStore, combineReducers } from 'redux';
import storeRacun from './store/reducers/racuni';
import racunReduceri from './store/reducers/racunSLice';
import { Provider } from 'react-redux';
import HomePage from './screens/HomePage';
import BillListPage from './screens/BillListPage'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ucitajFontove = () => {
  return Font.loadAsync({
    //Baloo: require('./assets/Baloo.ttf')
  });
};

// Spajanje svih reducera u jedan objekt
const glavniReducer = combineReducers({
  radovi: racunReduceri,
});
// Stvaramo centralni spremnik
const store = storeRacun;

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
          component={BillListPage}
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
