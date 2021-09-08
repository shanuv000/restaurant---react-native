import React from "react";
// import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreens from "./src/screens/SearchScreens";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
const navigator = createStackNavigator(
  {
    Search: SearchScreens,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: { title: "Business Search" },
  }
);
export default createAppContainer(navigator);
