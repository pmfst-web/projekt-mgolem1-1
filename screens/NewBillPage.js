import React, { useEffect, useMemo, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Input,
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Platform,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../constants/theme';



const NewBillPage = () => {

  const [amount, setAmount] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('Namirnice');

  

  return (
    <View style={stil.ekran}>
                    <View>
                        <TextInput
                            placeholder="Opis"
                            value={amount}
                            onChangeText={setAmount} />
                        <TextInput
                            placeholder="Iznos"
                            value={date}
                            onChangeText={setDate} />
                       
                    </View>
                </View>)
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popisElement: {
    backgroundColor: '#B591FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default NewBillPage
