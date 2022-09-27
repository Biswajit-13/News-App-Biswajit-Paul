import { View, TexInput, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.input} 
        value={props.SearchText}
        onChangeText={(text)=>props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
    container:{
margin:10,
    },
    input:{
        padding:3,
        borderRadius:40,
        color:'black',
        borderWidth:1,

    }
});
