import React, {Component} from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'



export default class Dashboard extends Component {
  render(){
    return(
      <View>
      <Image style={styles.iconImage}source={require("../assets/drive.png")}></Image>
      <Text style={{textAlign: "center", topMargin: "10"}}>
         Student Dashboard!
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconImage: {
    width: "100%",
    height: "500%",
    resizeMode: "contain"
  },
})