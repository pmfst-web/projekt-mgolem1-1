import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {getRacunSelector,deleteBill} from '../store/reducers/racunSLice'
import {useAppDispatch} from '../store/reducers/racuni'

const BillListPage = ({ navigation }) => {
  const racun=useSelector(getRacunSelector);

    const dispatch=useAppDispatch();

   const removeFromListHandler=(id)=>{
     console.log(id);
      dispatch(deleteBill(id));
      console.log(racun)
    }
    
  const prikazElelementa = (podaci) => {
    return (
       <TouchableOpacity onPress={()=>removeFromListHandler(podaci.item.id)}>
        <View style={stil.popisElement}>
          <Text>{podaci.item.type}</Text>
        </View>
        </TouchableOpacity>
    );
  };
  return (
    <View style={stil.ekran}>
      <Text>Popis računa</Text>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={racun}
        renderItem={prikazElelementa}
      />
    </View>
  );
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

export default BillListPage;
