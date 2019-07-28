import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
export default class AppHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Feather name="chevron-left" style={styles.icon} size={26} />
        </View>
        <View>
          <Feather name="grid" style={styles.icon} size={26} />
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
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center"
  },
  icon: {
    fontWeight: "bold",
    margin: 10
  }
});
