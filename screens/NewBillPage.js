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
  const [error, setError] = useState(
    {
      amout: '',
      type: '',
      category: '',
      valid: true,
    },
  );

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
    validateFields();
    console.log(error.valid)
    if (error.valid) {
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
    }
  };

  const validateFields = () => {
    let errors = error;

    if (category == '') {
      errors.category = 'Neispravan kategorija';
      errors.valid = false;
    } else if (category !== '' && errors.valid) {
      errors.category = '';
      errors.valid = true;
    }
    if (type == '') {
      errors.type = 'Odaberite tip računa';
      errors.valid = false;
    } else if (type !== '' && errors.valid) {
      errors.type = '';
      errors.valid = true;
    }
    if (amount <= 0) {
      errors.amount = 'Unesite ispravan iznos';
      errors.valid = false;
    } else if (amount > 0 && errors.valid) {
      errors.amount = '';
      errors.valid = true;
    }

    setError({ ...errors });
  };

  return (
    <View style={styles.ekran}>
      <Text style={styles.textStyle}>Kategorija</Text>
      <TextInput
        style={styles.input}
        placeholder="Kategorija"
        onChangeText={(newText) => setCategory(newText)}
        defaultValue={category}
      />
      <Text style={styles.error}>{error.category}</Text>
      <View>
        <RadioButton PROP={PROP} setChecked={setType} checked={type} />
      </View>
      <Text style={styles.error}>{error.type}</Text>
      <CurrencyInput
        style={styles.input}
        value={amount}
        onChangeValue={setAmount}
        unit="$"
        delimiter=","
        separator="."
        precision={2}
        ignoreNegative={true}
        minValue={0}
      />
      <Text style={styles.error}>{error.amount}</Text>
      <Button onPress={() => handleSubmit()} title="Novi račun" />
    </View>
  );
};

const styles = StyleSheet.create({
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
  error: {
    color: 'red',
    alignSelf: 'center',
  },
});

export default NewBillPage;
