import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Icon } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
const BillListPage = (props) => {
  console.log(props.podaci, 'aa');


  const rightSwipe = ( dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={()=>props.removeFromListHandler(props.podaci.id)} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Text style={{ transform: [{ scale: scale }] }}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };


  console.log(props.podaci.category);
  return (
    <Swipeable renderRightActions={rightSwipe}>
      <View style={styles.listItem}>
        <View
          style={{ alignItems: 'right', justifyContent: 'center', flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>{props.podaci.category}</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={()=> props.handleDetails(props.podaci.id)}>
          {props.podaci.type.toUpperCase() === 'UPLATA' ? (
            <Text style={{ color: 'green' }}>{props.podaci.amount}€</Text>
          ) : (
            <Text style={{ color: 'red' }}>-{props.podaci.amount}€</Text>
          )}
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  deleteBox: {
    backgroundColor: '#ff8164',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 62,
    marginTop: 12,
    paddingTop: 10,
  },
});

export default BillListPage;
