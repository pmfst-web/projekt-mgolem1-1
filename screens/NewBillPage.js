import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Picker,
  InputLabel,
} from 'react-native';
import uuid from 'react-native-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addBill, getCategory } from '../store/reducers/racunSLice';
import CurrencyInput from 'react-native-currency-input';
import { RadioButton } from 'react-native-paper';

const NewBillPage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => {
    if (state.racun.categoryByType.length < 1) {
      return state.racun.category;
    } else {
      return state.racun.categoryByType;
    }
  });

  const [error, setError] = useState({
    amout: '',
    type: '',
    category: '',
    valid: true,
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setAmount(0);
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

  const handleSubmit = () => {
    validateFields();
    console.log(error.valid);
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

  const onPressRadio = (value) => {
    setType(value);
    console.log(type);
    dispatch(getCategory(value));
  };
  const validateFields = () => {
    let errors = error;

    if (category == '') {
      errors.category = 'Neispravan kategorija';
      errors.valid = false;
    } else if (category != '') {
      errors.category = '';
      errors.valid = true;
    }
    if (type == '') {
      errors.type = 'Odaberite tip računa';
      errors.valid = false;
    } else if (type != '') {
      errors.type = '';
      errors.valid = true;
    }
    if (amount <= 0) {
      errors.amount = 'Unesite ispravan iznos';
      errors.valid = false;
    } else if (amount > 0) {
      errors.amount = '';
      errors.valid = true;
    }

    setError({ ...errors });
  };

  return (
    <View style={styles.ekran}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {/*<View>
        <RadioButton PROP={PROP} setChecked={setType} checked={type} />
      </View>*/}
          <Text>Izaberite vrstu računa: </Text>
          <View style={styles.radioBTN}>
            <RadioButton
              color="#F5B7B1"
              value="isplata"
              status={type === 'isplata' ? 'checked' : 'unchecked'}
              onPress={() => onPressRadio('isplata')}
            />
            <Text>Isplata</Text>
          </View>
          <View style={styles.radioBTN}>
            <RadioButton
              color="#F5B7B1"
              value="uplata"
              status={type === 'uplata' ? 'checked' : 'unchecked'}
              onPress={() => onPressRadio('uplata')}
            />
            <Text>Uplata</Text>
          </View>
          <Text style={styles.error}>{error.type}</Text>
          <Text>Izaberite kategoriju računa: </Text>
          <View style={{
    marginTop: 10,
    marginBottom: 10}}>
            <Picker
              selectedValue={category}
              style={{
                backgroundColor: 'transparent',
                height: 36,
                width: 251,
              }}
              onValueChange={setCategory}>
              <Picker.Item
                key={-1}
                label={'Odaberi kategoriju...'}
                value="first"
              />
              {categoryList.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.category}
                  value={item.category}
                />
              ))}
            </Picker>
          </View>

          <Text style={styles.error}>{error.category}</Text>
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
          <Button
            style={{ width: 251 }}
            color="#F5B7B1"
            onPress={() => handleSubmit()}
            title="Novi račun"
          />
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
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderTopColor:"#17202A",
     height: 36,
                width: 251,
  },
  error: {
    color: 'red',
    alignSelf: 'center',
  },
  radioBTN: { marginBottom: 3, alignItems: 'center', flexDirection: 'row' },
  container: {
    backgroundColor: '#FBFCFC',
    borderRadius: 5,
    height: '80%',
    width: '80%',
    marginTop: 30,
  },
  inputContainer: {
    margin: 10,
    paddingTop: 30,
  },
});

export default NewBillPage;
