import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
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
  const [active, setActive] = useState(1);
  const racun = useSelector(getFilterRacunSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(filterTypeBill('All'));
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
    dispatch(deleteBill(id));
    navigation.navigate('Home');
  };

  const onDetails = (id) => {
    navigation.navigate('DetailsPage', { id });
  };

  return (
    <View style={styles.ekran}>
      <View style={styles.buttonsFilter}>
        <View style={active == 1 ? styles.activeButton : null}>
          <Button onPress={() => filterType('All', 1)}>Svi</Button>
        </View>
        <View style={active == 2 ? styles.activeButton : null}>
          <Button onPress={() => filterType('ISPLATA', 2)}>Isplata</Button>
        </View>
        <View style={active == 3 ? styles.activeButton : null}>
          <Button onPress={() => filterType('UPLATA', 3)}>Uplata</Button>
        </View>
      </View>
      <Text>Popis računa</Text>
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={racun}
          renderItem={({ item }) => (
            <BillListPage
              podaci={item}
              removeFromListHandler={removeFromListHandler}
              handleDetails={onDetails}
            />
          )}
          keyExtractor={(item) => item.id}
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
    marginTop: 20,
  },
  buttonsFilter: {
    height: '10%',
    flexDirection: 'row',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  activeButton: {
    textDecorationLine: 'underline',
  },
});

export default TransactionPage;
