import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Constant from "../constants";
const imgData = Constant.fakeData;
const centerImgData = Math.floor(imgData.length / 2);
export default class AppPost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.imageView}>
          <View style={styles.imageList}>
            {imgData.slice(0, centerImgData).map(e => {
              return (
                <Image
                  source={e.imgSource}
                  key={e.id}
                  style={styles.imageItem}
                />
              );
            })}
          </View>
          <View style={styles.imageList}>
            {imgData.slice(centerImgData).map(e => {
              return (
                <Image
                  source={e.imgSource}
                  key={e.id}
                  style={styles.imageItem}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    flexDirection: "row",
    flexGrow: 1
  },
  imageItem: {
    width: 170,
    height: 170,
    borderRadius: 10,
    margin: 5
  },
  imageList: {
    flexDirection: "column",
    justifyContent: "center"
  },
  imageView: {
    justifyContent: "center",
    flexDirection: "row"
  }
});
