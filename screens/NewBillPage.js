import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import uuid from 'react-native-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addBill } from '../store/reducers/racunSLice';
import CurrencyInput from 'react-native-currency-input';

import RadioButton from '../components/RadioButton';

const PROP = [
  {
    key: 'ispala',
    text: 'Isplata',
  },
  {
    key: 'uplata',
    text: 'Uplata',
  },
];

const NewBillPage = ({ navigation, route }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setAmount(0);
      setType('');
      setCategory('');
    });
    return () => {
      unsubscribe();
    };
  }, [navigation, route]);

  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addBill({
        id: uuid.v4(),
        date: date,
        type,
        category,
        amount,
      })
    );

    navigation.navigate('Success');
  };
  return (
    <View style={stil.ekran}>
      <Text style={stil.textStyle}>Kategorija</Text>
      <TextInput
        style={stil.input}
        placeholder="Kategorija"
        onChangeText={(newText) => setCategory(newText)}
        defaultValue={category}
      />
      <View>
        <RadioButton PROP={PROP} setChecked={setType} checked={type} />
      </View>
      <CurrencyInput
        style={stil.input}
        value={amount}
        onChangeValue={setAmount}
        unit="$"
        delimiter=","
        separator="."
        precision={2}
        ignoreNegative={true}
        minValue={0}
      />
      <Button onPress={() => handleSubmit()} title="Novi račun" />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 14,
    color: '#000',
    alignItems: 'right',
  },
  input: {
    fontSize: 16,
    width: '65%',
    borderBottomWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default NewBillPage;
