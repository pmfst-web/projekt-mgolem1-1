import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  Input,
  Text,
  View,
  StatusBar,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import Card from '../components/Card';
import { theme } from '../constants/theme';
import Boje from '../constants/Boje'
import React, { useRef } from 'react';
import DetailsPage from './DetailsPage';
import NewBillPage from './NewBillPage';
const Tab = createBottomTabNavigator();
import { useSelector, useDispatch } from 'react-redux';
import {getRacunSelector} from '../store/reducers/racunSLice'

const HomePage = () => {
  const racun=useSelector(getRacunSelector);
  let total=0;
    racun.forEach(el=>{
        total+=+el.amount;
    })
  return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Stanje na računu: {total}kn</Text>
        </Card>
      </SafeAreaView>
      </>
  );
};


const styles = StyleSheet.create({
  container: {
    padding:'50px',
    flex: 1,
    margin: 16,
    alignItems: 'center', // Centered horizontally
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FDFEFE',
  },
  card: {
    height: 200,
    width: '100%',
    backgroundColor: '#f18484',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});

export default HomePage
