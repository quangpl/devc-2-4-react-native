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
      lose: 0,
      won: 0,
      tied: 0,
      total: 0
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
      if (computerChoice.value === "scissors") {
        result = "Victory!";
        this.setState({
          won: this.state.won + 1,
          total: this.state.total + 1
        });
      } else {
        result = "Defeat!";
        this.setState({
          lose: this.state.lose + 1,
          total: this.state.total + 1
        });
      }
    }
    if (val === "paper") {
      if (computerChoice.value === "rock") {
        result = "Victory!";
        this.setState({
          won: this.state.won + 1,
          total: this.state.total + 1
        });
      } else {
        result = "Defeat!";
        this.setState({
          lose: this.state.lose + 1,
          total: this.state.total + 1
        });
      }
    }
    if (val === "scissors") {
      if (computerChoice.value === "paper") {
        result = "Victory!";
        this.setState({
          won: this.state.won + 1,
          total: this.state.total + 1
        });
      } else {
        result = "Defeat!";
        this.setState({
          lose: this.state.lose + 1,
          total: this.state.total + 1
        });
      }
    }

    if (val === computerChoice.value) {
      result = "Tie game!";
      this.setState({
        tied: this.state.tied + 1,
        total: this.state.total + 1
      });
    }
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
    console.log(this.state);
  };
  render() {
    return (
      <View style={styles.container}>
        <Header result={this.state.result} />
        <View style={styles.body}>
          <Player player="You" choice={this.state.yourChoice} />
          <Player player="Computer" choice={this.state.computerChoice} />
        </View>
        <Footer
          onClickButton={this.onClickButton}
          summary={{
            lose: this.state.lose,
            won: this.state.won,
            total: this.state.total,
            tied: this.state.tied
          }}
        />
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
