import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Player from "./components/Player";
import { CHOICES, getRandomChoice } from "./util/general";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      yourChoice: {},
      computerChoice: {},
      summary: {
        lose: 0,
        win: 0,
        tie: 0
      }
    };
  }
  onClickButton = val => {
    let result;
    const yourChoice = CHOICES.find(choice => choice.value === val);
    const randomChoice = getRandomChoice().value;

    const computerChoice = CHOICES.find(
      choice => choice.value === randomChoice
    );

    if (val === "rock") {
      result = computerChoice.value === "scissors" ? "Victory!" : "Defeat!";
    }
    if (val === "paper") {
      result = computerChoice.value === "rock" ? "Victory!" : "Defeat!";
    }
    if (val === "scissors") {
      result = computerChoice.value === "paper" ? "Victory!" : "Defeat!";
    }

    if (val === computerChoice.value) result = "Tie game!";
    this.setState({
      result,
      computerChoice,
      yourChoice
    });
    console.log({
      result,
      computerChoice,
      yourChoice
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Header result={this.state.result} />
        <View style={styles.body}>
          <Player player="You" choice={this.state.yourChoice} />
          <Player player="Computer" choice={this.state.computerChoice} />
        </View>
        <Footer onClickButton={this.onClickButton} />
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
  body: {
    flexDirection: "row",
    flex: 0.5,
    borderColor: "#000",
    borderStyle: "dashed",
    borderWidth: 2,
    width: "96%",
    borderRadius: 4
  }
});
