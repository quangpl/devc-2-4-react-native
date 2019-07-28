import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class AppInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AppInfo</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "yellow",
    color: "#fff"
  }
});
