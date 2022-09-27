import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useFonts,Alata_400Regular } from "@expo-google-fonts/alata";
import { 
  Arimo_400Regular,
  Arimo_400Regular_Italic,
  Arimo_700Bold,
  Arimo_700Bold_Italic 
} from '@expo-google-fonts/arimo'

import Apploading from "expo-app-loading";
// import moment from "moment";

const dotNews_SingleNews = (props) => {
  let [fontsloaded, error] = useFonts({
    Arimo_700Bold,
    Alata_400Regular,
  });
  if (!fontsloaded) {
    return <Apploading />;
  } else {
    return (
      <SafeAreaView
        style={{
          marginBottom: 10,
          padding: 10,
          alignSelf: "center",

          width: "92%",
          borderRadius: 10,

          elevation: 3,
        }}
      >
        {/*image and caption*/}
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Image
            source={{
              uri: props.urlToImage,
            }}
            style={{
              width: 100,
              height: 90,
              borderRadius: 10,
              resizeMode: "contain",
            }}
          />
          <View style={{ width: "70%", marginLeft: 10 }}>
            <Text style={{ marginRight: 10, fontFamily: "Arimo_700Bold",fontSize:16}}>
              {[props.title]}
            </Text>
          </View>
        </View>
        {/*description*/}
        <Text
          numberOfLines={6}
          style={{ marginTop: 10, fontFamily: "Alata_400Regular" ,fontSize:14}}
        >
          {props.description}
        </Text>
        {/*by*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "blue",
              fontFamily: "Alata_400Regular",
              marginRight: 5,
              fontSize:13,
            }}
          >
            By :
            <Text
              style={{
                marginLeft: 10,
                color: "red",
                fontFamily: "Alata_400Regular",
                fontSize:13,
              }}
            > {props.author}</Text>
            
             
          </Text>
        </View>
        {/*date and read more*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "brown", fontFamily: "Alata_400Regular",fontSize:13 }}>
              {props.publishedAt}
            </Text>
            <Text style={{ color: "brown", fontFamily: "Alata_400Regular",fontSize:13 }}>
              ,{props.sourceName}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: "25%",
              height: 20,
              backgroundColor: "gold",
              alignSelf: "center",
              marginTop: 10,
              borderRadius: 12,
              alignSelf: "center",
            }}
            onPress={() => Linking.openURL(props.link)}
          >
            <Text
              style={{
                alignSelf: "center",
                fontFamily: "Arimo_700Bold",
                fontSize: 13,
                color: "blue",
              }}
            >
              Read More
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

export default dotNews_SingleNews;
