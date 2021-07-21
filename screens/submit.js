import React, {Component} from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'



export default class Submit extends Component {
  render(){
    return(
      <View>
      <Image style={styles.iconImage}source={require("../assets/drive.png")}></Image>
      <Text>
         Submit Homework!
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconImage: {
    width: "50%",
    height: "50%",
    resizeMode: "contain"
  },
})