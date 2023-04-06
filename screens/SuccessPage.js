import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import MCI from '@expo/vector-icons/MaterialCommunityIcons';

const SuccessPage = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: null,
    headerLeft: null,
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View>
            <MCI name="home" size={26} />
          </View>
        </TouchableOpacity>
      );
    },
  });
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
        Čestitam. Uspješno dodan raćun!
      </Text>
      <View style={styles.slikaOkvir}>
        <Image style={styles.slika} source={require('../assets/success.png')} />
      </View>
    </View>
  );
};

const styles=StyleSheet({
  slika: {
    width: 300,
    height: 200,
    flex: 1,
  },
  slikaOkvir: {
    overflow: 'hidden',
    width: '70%',
    height: 200,
    borderRadius: 10,
    marginVertical: 20
  },
})

export default SuccessPage;
