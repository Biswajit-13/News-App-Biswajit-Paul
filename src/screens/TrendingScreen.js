import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DotNews_SingleNews from "../components/SingleNews";
import { Ionicons, Feather } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";

const News = () => {
  const [searchText, setSearchText] = useState("");

  const [articles, setArticles] = useState([]);
  const [isloaded, setIsloaded] = useState(false);
  const getNews = async () => {
    axios
      .get("https://inshorts.deta.dev/news?category=national")
      .then((response) => {
        // handle success
        console.log(response.data.data);
        setIsloaded(true);
        setTimeout(() => {
          setIsloaded(false);
          setArticles(response.data.data);
        }, 1000);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    getNews();
  }, []);
  let [fontsloaded, error] = useFonts({
    Alata_400Regular,
  });
  if (!fontsloaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {isloaded ? (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              minHeight: "100%",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="skyblue" />
          </View>
        ) : (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 5,
              }}
            >
              <View style={{ width: 50 }}></View>
              <Text
                style={{
                  alignSelf: "center",
                  fontFamily: "Alata_400Regular",
                  fontSize: 20,
                }}
              >
                Trending
              </Text>
              <TouchableOpacity onPress={() => getNews()} style={{ width: 50 }}>
                <Ionicons name="refresh" size={24} />
              </TouchableOpacity>
            </View>

            <View>
              <FlatList
                data={articles}
                renderItem={({ item }) => (
                  <DotNews_SingleNews
                    urlToImage={item.imageUrl}
                    title={item.title}
                    description={item.content}
                    author={item.author}
                    publishedAt={item.date}
                    sourceName={item.time}
                    link={item.url}
                  />
                )}
                keyExtractor={(item) => item.title}
              />
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
};

export default News;
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
