import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,Icon
} from 'react-native';

 const BillListPage = (props) => {

   console.log(props.podaci,'aa')
   const removeFromListHandler = (id) => {
     props.removeFromListHandler(id);
  };

console.log(props.podaci.category)
      return (
         <View style={styles.listItem}>
      <View style={{alignItems:"right",justifyContent:'center', flex:1}}>
        <Text style={{fontWeight:"bold"}}>{props.podaci.category}</Text>
      </View>
      <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
      {props.podaci.type.toUpperCase()==='PRIHOD'?<Text style={{color:"green"}}>{props.podaci.amount}€</Text>:
      <Text style={{color:"red"}}>-{props.podaci.amount}€</Text>}
        
      </TouchableOpacity>
    </View>
   )
  };


const styles = StyleSheet.create({
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});

export default BillListPage;
