import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class BodyPlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.playerName}>{this.props.player}</Text>
        <Image
          source={{
            uri: this.props.choice.imageUrl
          }}
          style={styles.image}
        />
        <Text style={styles.selectName}>{this.props.choice.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 170,
    height: 170
  },
  playerName: {
    fontWeight: "bold",
    fontSize: 28
  },
  selectName: {
    fontSize: 22
  }
});
