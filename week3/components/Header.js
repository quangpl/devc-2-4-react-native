import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={
            this.props.result === "Victory!"
              ? styles.win
              : this.props.result === "Defeat!"
              ? styles.lose
              : styles.tie
          }
        >
          {this.props.result}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center"
  },
  win: {
    color: "green",
    fontSize: 33,
    fontWeight: "bold"
  },
  lose: {
    color: "red",
    fontSize: 33,
    fontWeight: "bold"
  },
  tie: {
    color: "black",
    fontSize: 33,
    fontWeight: "bold"
  }
});
