import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
const  RadioButton=(props)=>{
  return (
      <View>
        {props.PROP.map((res) => {
          return (
            <View key={res.key} style={styles.container}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {props.setChecked(res.key)}
                  
                }>
                {props.checked === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
              <Text style={styles.radioText}>{res.text}</Text>
            </View>
          );
        })}
      </View>
    );
}

const styles = StyleSheet.create({
  container: { marginBottom: 3, alignItems: 'center', flexDirection: 'row' },
  radioText: {
    fontSize: 14,
    color: '#000',
    margin: 5,
  },
  radioCircle: {
    height: 16,
    width: 16,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#3740ff',
  },
});


export default RadioButton;