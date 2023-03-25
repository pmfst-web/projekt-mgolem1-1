import React, { useEffect, useMemo, useRef } from 'react';
import { View, StyleSheet, TextInput, Button,Text } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import uuid from 'react-native-uuid';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { useSelector, useDispatch } from 'react-redux';
import { addBill } from '../store/reducers/racunSLice';

import RadioButton from '../components/RadioButton';

const PROP = [
  {
    key: 'rashod',
    text: 'Rashod',
  },
  {
    key: 'prihod',
    text: 'Prihod',
  },
];

const NewBillPage = ({ navigation }) => {
  
  const [amount, setAmount] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //Your refresh code gets here
    });
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  
  const handleSubmit = () => {
    console.log('aa');
    dispatch(
      addBill({
        id: uuid.v4(),
        date: new Date(),
        type,
        category,
        amount,
      })
    );
  };
  return (
    <View style={stil.ekran}>
    <Text style={stil.textStyle}>
    Kategorija
    </Text>
      <TextInput
        style={stil.input}
        placeholder="Kategorija"
        onChangeText={(newText) => setCategory(newText)}
        defaultValue={category}
      />
      <View>
        <RadioButton PROP={PROP} setChecked={setType} checked={type} />
      </View>
      <CurrencyTextField
      style= {stil.input}
        label="Amount"
        value={amount}
        currencySymbol="€"
        minimumValue="0"
        outputFormat="number"
        decimalCharacter="."
        digitGroupSeparator=","
        onChange={(event, value) => setAmount(value)}
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
    fontSize:14,
    color:'#000',
    alignItems:'right'
  },
  input: {
    fontSize:16,
    width: '65%',
    borderBottomWidth: 1,
    padding: 10,
    margin:10
  },
});

export default NewBillPage;
