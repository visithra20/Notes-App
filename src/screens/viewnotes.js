import React, { useState } from 'react';
import { SafeAreaView, StyleSheet,  TouchableOpacity, View } from 'react-native';
import {FAB,Text} from 'react-native-paper'
export default function viewnotes({navigation}) {
 
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Text>You Don't Have Any Notes</Text>
      <View>
      <FAB style={styles.fab}  
      elevated
      icon='plus' 
      label='add new notes'
       onPress={()=>navigation.navigate('addnotes')} />
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    backgroundColor: '#ECF8F0',
    alignItems: 'center',
    
    justifyContent: 'center',
   
  },
  fab:{
    position:'absolute',
    margin:20,
    borderRadius:60,
    backgroundColor:'#BCF8C9',
 }
 
});
