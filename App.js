import React from "react";
// import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreens from "./src/screens/SearchScreens";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
const navigator = createStackNavigator(
  {
    Search: SearchScreens,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: { title: "Business" },
  }
);
export default createAppContainer(navigator);
