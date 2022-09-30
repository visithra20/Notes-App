import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { FAB, IconButton,TextInput } from "react-native-paper";

export default function addnotes({  navigation}) {
  const [notestitle, setNotestitle] = useState('');
  const [notedescrption, setNotedescrption] = useState('');

  function onSavenote() {
    navigation.state.params.addNote({ notestitle,notedescrption})
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <View style={styles.iconview}>
        <IconButton
          style={styles.iconButton}
          icon="close"
          onPress={() => navigation.goBack()}
        /></View>
        <TextInput
          style={styles.text}
          label="Add Note"
          value={notestitle}
          mode="outlined"
          onChangeText={setNotestitle}
        />
        <TextInput
          style={styles.textDescrption}
          label="Add Descrption"
          value={notedescrption}
          mode="flat"
          onChangeText={setNotedescrption}
          scrollEnabled={true}
          returnKeyLabel='done'
        />
      
        {/* <Text>notes model</Text> */}
      </View>
      <FAB icon='check'
       style={styles.button}
       disable ={notestitle =='' ? true:false}
        onPress={()=>onSavenote()}
       />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#ECF8F0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  iconview:{
    flexDirection:'row-reverse',
  },
  iconButton: {
   
    backgroundColor: '#F08080' ,
    // position:'absolute'
  },
  text: {
    // width:100,
    margin: 10,
    
  },
  textDescrption:{
    width:"95%",
    height:500,
    margin: 10,
    padding:10,
  },
  button:{
    backgroundColor: '#BCF8C9' ,
    // position:'relative',
    flexDirection:'row-reverse',
    // paddingHorizontal:20,
    // paddingVertical:20,
    width:100,
    justifyContent: 'center',
    borderRadius:100,
    marginRight:'70%',
    borderWidth:0.3,
    borderColor:'green',
    marginBottom:'100%',
  }
});
