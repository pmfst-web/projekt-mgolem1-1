import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import {getRacunSelector} from '../store/reducers/racunSLice'

const HomePage = () => {
  const racun=useSelector(getRacunSelector);
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    let sum=0
    if(racun!==undefined){
    racun?.forEach(el=>{
      console.log(sum)
      console.log(racun)
      if(el.type.toUpperCase()=="RASHOD") sum-=el.amount;
      else{
        sum+=el.amount;
      }
    })
    setTotal(sum)}
  },[racun])
  
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
