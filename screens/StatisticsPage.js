import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

const StatisticsPage = ({ navigation }) => {
  const racun = useSelector((state) => state.racun.racun);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const categoryList = useSelector((state) => state.racun.category);
  const [total, setTotal] = useState(0);
  console.log(category);
  const handleStatistics = (value) => {
    setCategory(value);
    setTotal(0);
    let sum = 0;
    console.log(value);
    if (racun !== undefined) {
      racun?.forEach((el) => {
        if (el.category.toUpperCase() == value.toUpperCase()) {
          setType(el.type);
          sum += el.amount;
        }
      });
      setTotal(sum);
    }
    console.log(sum);
  };

  return (
    <View style={styles.ekran}>
      <View style={styles.container}>
        <Picker
          selectedValue={category}
          style={{
            backgroundColor: 'transparent',
            height: 36,
            width: 221,
            marginTop:40
          }}
          onValueChange={(item) => handleStatistics(item)}>
          <Picker.Item key={-1} label={'Odaberi kategoriju...'} value="" />
          {categoryList.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.category}
              value={item.category}
            />
          ))}
        </Picker>
        <View style={styles.totalStyle}>
        {category ? (
          <Text>
            Ukupna {type.toLowerCase()} za kategoriju {category.toLowerCase()}{' '}
            je {total}€
          </Text>
        ) : null}
      </View>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
  },
  totalStyle: {
    margin: 30,

  },
   container: {
    alignItems: 'center',
    backgroundColor: '#FBFCFC',
    borderRadius: 5,
    height: '80%',
    width: '80%',
    marginTop: 30,
  },
});

export default StatisticsPage;
