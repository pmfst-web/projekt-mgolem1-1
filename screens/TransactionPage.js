import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import BillListPage from './BillListPage';

import { useSelector, useDispatch } from 'react-redux';
import {
  getRacunSelector,
  getFilterRacunSelector,
  deleteBill,
  filterTypeBill,
} from '../store/reducers/racunSLice';

const TransactionPage = ({ navigation }) => {
  const [refreshFlatlist, setRefreshFlatList] = useState(false);
  const [active, setActive] = useState(1);
  const racun = useSelector(getFilterRacunSelector);
  const racun2 = useSelector(getRacunSelector);
  const dispatch = useDispatch();
  console.log(racun, 'bb');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(filterTypeBill('All'));
      console.log('kurac', racun);
      setActive(1);
    });
    return () => {
      unsubscribe();
    };
  }, [navigation, dispatch, setActive, racun]);

  const filterType = useCallback(
    (type, index) => {
      dispatch(filterTypeBill(type));
      setActive(index);
    },
    [dispatch, setActive]
  );

  const removeFromListHandler = (id) => {
    console.log(id);
    dispatch(deleteBill(id));
    navigation.navigate('Transakcije');
  };
  return (
    <View style={styles.ekran}>
      <View style={styles.buttonsFilter}>
        <View style={active == 1 ? styles.activeButton : null}>
          <Button onPress={() => filterType('All', 1)}>Svi</Button>
        </View>
        <View style={active == 2 ? styles.activeButton : null}>
          <Button onPress={() => filterType('Rashod', 2)}>Rashod</Button>
        </View>
        <View style={active == 3 ? styles.activeButton : null}>
          <Button onPress={() => filterType('Prihod', 3)}>Prihod</Button>
        </View>
      </View>
      <Text>Popis računa</Text>
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={racun}
          renderItem={({ item }) => <BillListPage
                  podaci={item}
                  removeFromListHandler={removeFromListHandler}
                  index={1}
                />
              }
          keyExtractor={item => item.id}
        />
      </View>
              
    </View>
  );
};

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
  },
   container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:20
  },
  buttonsFilter: {
    height: '10%',
    flexDirection: 'row',
    backgroundColor: 'beige',
    borderWidth: 1,
    margin: 10,
    width: '80%',
    justifyContent: 'space-between',
  },
  activeButton: {
    textDecorationLine: 'underline',
  },
});

export default TransactionPage;
