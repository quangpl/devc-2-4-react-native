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

              <TouchableHighlight
                onPress={() => {
                  this.setState({
                    modal: false
                  });
                }}
              >
                <Text style={styles.buttonHide}>Hide Modal</Text>
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
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "green",
    fontSize: 22,
    textAlign: "center",
  },
  result:{

  },
  resultHighLight:{

  }

});
