import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from "react-native";
import { getRandomChoice, CHOICES } from "../util/general";
import { Feather } from "@expo/vector-icons";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {CHOICES.map(e => (
          <TouchableOpacity
            style={styles.button}
            key={e.name}
            onPress={() => this.props.onClickButton(e.value)}
          >
            <Text style={styles.buttonText}>{e.name}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => this.props.onClickResult}
          onPress={() =>
            this.setState({
              modal: true
            })
          }
        >
          <Feather name="flag" size={32} color="green" style={styles} />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text style={styles.title}>Your result :</Text>
              <Text style={styles.result}>
                Total: {this.props.summary.total}
              </Text>
              <Text style={styles.resultHighLight}>
                Won: {this.props.summary.won}
              </Text>
              <Text style={styles.result}>Lose: {this.props.summary.lose}</Text>
              <Text style={styles.resultHighLight}>
                Tied: {this.props.summary.tied}
              </Text>
              <Text style={styles.result}>
                Percent of Won:  
                {(
                  (this.props.summary.won * 100) /
                  this.props.summary.total
                ).toFixed(2)}%
              </Text>
              <Text style={styles.resultHighLight}>
                Percent of Lose:  
                {(
                  (this.props.summary.lose * 100) /
                  this.props.summary.total
                ).toFixed(2)}%
              </Text>
              <Text style={styles.result}>
                Percent of Tied:  
                {(
                  (this.props.summary.tied * 100) /
                  this.props.summary.total
                ).toFixed(2)}%
              </Text>

              <TouchableHighlight
                onPress={() => {
                  this.setState({
                    modal: false
                  });
                }}
              >
                <Text style={styles.buttonHide}>
                  <Feather
                    name="x-circle"
                    size={32}
                    color="green"
                    style={styles}
                  />
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  button: {
    backgroundColor: "#640D12",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 50,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff"
  },
  buttonResult: {
    backgroundColor: "yellow",
    fontWeight: "bold"
  },
  buttonHide: {
    marginTop: 15,
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "green",
    fontSize: 35,
    textAlign: "center"
  },
  result: {
    color: "#000",
    backgroundColor: "#fff",
    fontSize: 20,
    height: 30,
    textAlign: "center"
  },
  resultHighLight: {
    color: "#000",
    backgroundColor: "gray",
    fontSize: 20,
    height: 30,
    textAlign: "center"
  }
});
