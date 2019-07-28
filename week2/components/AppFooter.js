import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class AppFooter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AppFooter</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "red",
    color: "#fff"
  }
});
