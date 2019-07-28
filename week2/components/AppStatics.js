import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class AppStatics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AppStatics</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "black",
    color: "#fff"
  }
});
