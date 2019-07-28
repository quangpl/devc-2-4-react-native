import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Constant from "../constants";
import { Feather } from "@expo/vector-icons";
export default class AppInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.AppInfoLeft}>
          <Image
            style={styles.InfoAvatar}
            source={{
              uri: "https://i.imgur.com/57n2ej4.png"
            }}
          />
        </View>
        <View style={styles.AppInfoRight}>
          <Text style={styles.InfoName}>Sieu Thai</Text>
          <Text style={styles.InfoJob}>Developer</Text>
          <View style={styles.ButtonGroup}>
            <TouchableOpacity>
              <View style={styles.ButtonFollow}>
                <Text style={styles.ButtonText}>Follow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ButtonMessage}>
                <Text style={styles.ButtonText}>
                  <Feather name="send" size={30} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    color: "#fff",
    flexDirection: "row"
  },
  AppInfoLeft: {
    flex: 0.4,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff"
  },
  AppInfoRight: {
    flex: 0.6,
    justifyContent: "space-between",
    flexDirection: "column",
    color: "#fff"
  },
  InfoAvatar: {
    width: 120,
    height: 120,
    borderRadius: 0.5
  },
  InfoName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  InfoJob: {
    fontSize: 19,
    color: "gray",
  },
  ButtonGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ButtonFollow: {
    backgroundColor: Constant.FOLLOW_COLOR,
    color: "#fff",
    fontSize: 20,
    width: 120,
    height: 45,
    justifyContent: "center",
    borderRadius: 25
  },
  ButtonMessage: {
    backgroundColor: Constant.SEND_MESSAGE_COLOR,
    color: "#fff",
    fontSize: 20,
    width: 70,
    height: 45,
    justifyContent: "center",
    borderRadius: 25,
    marginRight:10,
  },
  ButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  }
});
