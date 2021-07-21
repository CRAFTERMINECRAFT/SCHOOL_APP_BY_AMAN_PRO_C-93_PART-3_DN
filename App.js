import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigation/drawer'



export default function App() {
 return (
   <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}


