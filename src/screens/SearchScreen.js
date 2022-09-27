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
import SearchNews from "../components/SearchNews";
import SearchBar from "../components/SearchBar";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import AppLoading from "expo-app-loading";

const DotNews_News = () => {
  const [searchText, setSearchText] = useState("");

  const [articles, setArticles] = useState([]);
  const [isloaded, setIsloaded] = useState(false);
  const getNews = async () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?qInTitle=general&apiKey=d73ee37118984c5ea0fb3d3bdef1cca4",
        {
          params: {
            // category: "general",
            //                                                                                                  pageSize: 100,
            q: searchText,
          },
        }
      )
      .then((response) => {
        // handle success
        console.log(response.data.articles);
        setIsloaded(true);
        setTimeout(() => {
          setIsloaded(false);
          setArticles(response.data.articles);
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
            <Text
              style={{
                alignSelf: "center",
                fontFamily: "Alata_400Regular",
                fontSize: 20,
              }}
            >
              Search News
            </Text>
            <View>
              <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                onSubmit={getNews}
              />
              {/* <Text>{searchText}</Text> */}
            </View>
            <View>
              <FlatList
                data={articles}
                renderItem={({ item }) => (
                  <SearchNews
                    urlToImage={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    publishedAt={item.publishedAt}
                    link={item.url}

                    // sourceName={item.source.name}
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

export default DotNews_News;
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
