import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class AppHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>AppHeader</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "blue",
    color: "#fff"
  }
});
