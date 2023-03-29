import React, { useEffect } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import uuid from 'react-native-uuid';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { useSelector, useDispatch } from 'react-redux';
import { addBill, updateRacun } from '../store/reducers/racunSLice';
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
      console.log(route.params?.id,'iiiii');
    });
    return () => {
      unsubscribe();
    };
  }, [navigation, route]);
  
  const id = route.params?.id;
  console.log('route', route.params?.id);
  console.log('id', id);

  

  const racun = useSelector((state) => {
    console.log(id);
    if (id) {
      console.log(id, 'bebe');
      return state.racun.racun.find((racun) => racun.id === id);
    } else return null;
  });

  const [amount, setAmount] = React.useState(racun?.amount || 0);
  const [date, setDate] = React.useState(racun?.date || new Date());
  const [type, setType] = React.useState(racun?.type || '');
  const [category, setCategory] = React.useState(racun?.category || '');
  console.log(racun, 'aaaaa');
  const dispatch = useDispatch();

  const handleEditBill = () => {
    dispatch(updateRacun({ id, date, type, category, amount }));

    navigation.navigate('HomePage');
  };

  const handleSubmit = () => {
    if (id) {
      handleEditBill();
    } else {
      dispatch(
        addBill({
          id: uuid.v4(),
          date: date,
          type,
          category,
          amount,
        })
      );
    }
    navigation.navigate('HomePage');
  };

  const handleAmountChange = (value) => {
    setAmount(value);
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
