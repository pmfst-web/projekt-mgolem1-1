import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const BillListPage = (props) => {
  return (
    <View style={styles.listItem}>
      <View style={{ alignItems: 'right', justifyContent: 'center', flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{props.podaci.category}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => props.handleDetails(props.podaci.id)}>
        {props.podaci.type.toUpperCase() === 'UPLATA' ? (
          <Text style={{ color: 'green' }}>{props.podaci.amount}€</Text>
        ) : (
          <Text style={{ color: 'red' }}>-{props.podaci.amount}€</Text>
        )}
      </TouchableOpacity>
    </View>
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
});

export default BillListPage;
