import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import AppLoading from "expo-app-loading";

const DotNews_DiscoverNews = ({ navigation }) => {
  let [fontsloaded, error] = useFonts({
    Alata_400Regular,
  });
  if (!fontsloaded) {
    return <AppLoading/>;
  }
  else{
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.search}>
        <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Search</Text>
        <TextInput style={styles.searchbar}> search news here....</TextInput>
      </View> */}
      <Text style={{ marginTop: 10, marginBottom: 10 ,fontFamily:'Alata_400Regular'}}>
        Categories
      </Text>
      <View style={styles.categoriestop}>
        <TouchableOpacity
        onPress={()=> navigation.navigate("Sports")}
         style={styles.button}>
         <Ionicons name="football-outline" size={45} color="black" />
          <Text style={styles.text}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("Business")}>
         <FontAwesome5 name="business-time" size={45} color="black" />
          <Text style={styles.text}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("Entertainment")}>
        <MaterialIcons name="local-movies" size={45} color="black" />
          <Text style={styles.text}>Entertainment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesbottom}>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("Technology")}>
         <FontAwesome name="laptop" size={45} color="black" />
          <Text style={styles.text}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("Science")}>
        <MaterialIcons name="science" size={45} color="black" />
          <Text style={styles.text}>Science</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("Politics")}>
          <MaterialCommunityIcons name="human-greeting-variant" size={45} color="black" />
          <Text style={styles.text}>Politics</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
    }
};

export default DotNews_DiscoverNews;
const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  categoriestop: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoriesbottom: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    width:95,
  },

  text: {
    marginTop: 5,
    fontFamily:'Alata_400Regular',
    // color: "gold",
  },
 
});
