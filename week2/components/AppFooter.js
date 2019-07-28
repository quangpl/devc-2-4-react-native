import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
export default class AppFooter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Feather name="link-2" style={styles.icon} size={23} />
        </View>
        <View>
          <Feather name="plus-circle" style={styles.icon} size={23} />
        </View>
        <View>
          <Feather name="user" style={styles.icon} size={23} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    color: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center"
  }
});
