import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class AppPostImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AppPost</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "gray",
    color: "#fff"
  }
});
