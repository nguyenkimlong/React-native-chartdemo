import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import {
  Card,
  Button,
  FormLabel,
  FormInput,
  Icon
} from "react-native-elements";
import { onSignIn, onUrl, isUrl } from "../auth";
import Modal from "react-native-modal";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      un: "",
      pa: "",
      kq: "DA LOGIN",
      token: "...",
      Url: ""
    };
    isUrl().then(res => this.setState({ Url: res }));
  }

  state = {
    visibleModal: null
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderButtonOpen = (text, onPress) => (
    <View style={{ alignSelf: "flex-end", margin: 25 }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            width: 30,
            height: 30,
            alignSelf: "flex-end"
          }}
          source={require("../icon/setting.png")}
        />
      </TouchableOpacity>
    </View>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={{ fontWeight: "bold" }}>Cấu hình</Text>
      <TextInput
        style={styles.input}
        placeholder="Server"
        value={this.state.Url}
        onChangeText={Url => this.setState({ Url })}
      />
      {this._renderButton("Save", () => {
        debugger;
        this.setState({ visibleModal: null });
        onUrl(this.state.Url).then(a => console.log("a", a));
      })}
    </View>
  );
  LOGIN() {
    debugger;

    fetch("http://" + this.state.Url + "/token", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      body:
        "grant_type=password&username=" +
        this.state.un +
        "&password=" +
        this.state.pa
    })
      .then(response => response.json())
      .then(responseJson => {
        debugger;
        console.log(responseJson);
        if (responseJson.error != null) {
          alert("Login Fail");
          return;
        }
        this.setState({
          kq: responseJson["access_token"]
        });
        onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
      });
  }
  render() {
    return (
      <ImageBackground
        backfaceVisibility={true}
        style={styles.container}
        source={require("../images/AccNetERP_login_screen.png")}
      >
        {this._renderButtonOpen("Sliding from the sides", () => {
          onUrl().then(res => this.setState({ Url: res }));
          this.setState({ visibleModal: 2 });
        })}
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("../images/logo.png")} />
        </View>

        <View style={styles.infoContainer}>
          <View style={{ padding: 20 }}>
            <StatusBar barStyle="light-content" />
            <TextInput
              style={styles.input}
              placeholder="Tên đăng nhập"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={un => this.setState({ un })}
            />

            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Mật khẩu"
              returnKeyType="go"
              ref={input => (this.passwordInput = input)}
              onChangeText={pa => this.setState({ pa })}
            />

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this.LOGIN();
              }}
            >
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
            <Modal
              isVisible={this.state.visibleModal === 2}
              animationIn={"slideInLeft"}
              animationOut={"slideOutRight"}
            >
              {this._renderModalContent()}
            </Modal>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  logo: {
    width: 175,
    height: 70,
    padding: 10
  },
  logocontainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 250,
    height: 200,
    flexGrow: 1
  },
  input: {
    height: 40,
    backgroundColor: "#3498db",
    marginBottom: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    color: "#FFF",
    borderColor: "#FFFFFF",
    fontWeight: "bold"
  },
  buttonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15
  }
});
