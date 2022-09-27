// import React from "react";
import * as React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./src/screens/SearchScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TrendingScreen from "./src/screens/TrendingScreen";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverNavigator from "./CustomNavigation";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
         
          tabBarStyle:{position:'absolute'},

        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
            headerShown: false,
            // tabBarActiveBackgroundColor:'gold',
          }}
        />
        <Tab.Screen
          name="Trending"
          component={TrendingScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="trending-up-outline" size={26} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="DISCOVER"
          component={DiscoverNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="menu-outline" size={28} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="search-outline" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#079992",
  },
});
