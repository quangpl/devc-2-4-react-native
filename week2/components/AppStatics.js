import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class AppStatics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.staticItem}>
          <Text style={styles.textDetail}>210</Text>
          <Text style={styles.textTitle}>Photos</Text>
        </View>
        <View style={styles.staticItem}>
          <Text style={styles.textDetail}>15k</Text>
          <Text style={styles.textTitle}>Followers</Text>
        </View>
        <View style={styles.staticItem}>
          <Text style={styles.textDetail}>456</Text>
          <Text style={styles.textTitle}>Following</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    color: "#fff",
    justifyContent:"space-around",
    alignContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  textTitle:{
      fontSize:18,
      color:"gray"
  },
  textDetail:{
      fontSize:20,
      color:"black",
      fontWeight:"bold",
      textAlign:"center"
  },
  staticItem:{
      flexDirection:"column",
  }
});
