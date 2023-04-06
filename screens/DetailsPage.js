import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getRacunSelector, deleteBill } from '../store/reducers/racunSLice';
import { useSelector, useDispatch } from 'react-redux';
import MCI from '@expo/vector-icons/MaterialCommunityIcons';

const DetailsPage = ({ route, navigation }) => {
  const idBill = route.params.id;
  const sviRacun = useSelector(getRacunSelector);
  const racun = sviRacun.find((r) => r.id === idBill);
  
  const dispatch = useDispatch();
  const removeFromListHandler = (id) => {
    dispatch(deleteBill(id));
    navigation.navigate('Transakcije');
  };

  navigation.setOptions({
    headerTitle: racun?.category,
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => removeFromListHandler(racun.id)}>
          <View>
            <MCI name="delete" size={26} />
          </View>
        </TouchableOpacity>
      );
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.tablica}>
        <View style={styles.redak}>
          <View style={styles.stupac}>
            <Text>Datum računa: </Text>
          </View>
          <View style={styles.stupac}>
            <Text>{racun.date.toLocaleDateString()}</Text>
          </View>
        </View>
        <View style={styles.redak}>
          <View style={styles.stupac}>
            <Text>Tip računa:</Text>
          </View>
          <View style={styles.stupac}>
            <Text>{racun.type}</Text>
          </View>
        </View>
        <View style={styles.redak}>
          <View style={styles.stupac}>
            <Text>Kategorija:</Text>
          </View>
          <View style={styles.stupac}>
            <Text style={styles.bold}>{racun.category}</Text>
          </View>
        </View>
        <View style={styles.redak}>
          <View style={styles.stupac}>
            <Text>Iznos:</Text>
          </View>
          <View style={styles.stupac}>
            <Text style={styles.bold}>{racun.amount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tablica: {
    width: '80%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default DetailsPage;
