import React, { Component } from "react"; // import from react
import { Window, App, Text, Button, TextInput, View, StyleSheet, Image} from "proton-native"; // import the proton-native components
import logo from './assets/images/beacon_logo_64_64.png'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <Text>{this.state.date.toLocaleTimeString()}</Text>
    );
  }
}


class Login extends Component {
  state = {
        username: "",
		email: "",
        password: ""
  };

  set_username(username){
  	this.setState({ username: username });
  };


  set_password(password){
    this.setState({ password: password});
  };


    post(scriptName, flag1, flag2) {
        var XMLHttpRequest= require("xmlhttprequest").XMLHttpRequest;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log(this.responseText);

        };
        xhttp.open("POST", `http://127.0.0.1/${scriptName}.php`, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(`username=${flag1}&password=${flag2}`);

    }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


    handleSubmit(event) {
        console.log(this.state.username);
		console.log(this.state.password);
		this.post("login", this.state.username, this.state.password);
    }

    render() {
        return (
		<View>
			<View>
				<Text>Log-In to your Beacon Account</Text>
			</View>
			<View>
        <Text>Username:</Text>
				<TextInput onChangeText={text => this.set_username(text)}/>
			</View>
      <View>
        <Text>Password:</Text>
            <TextInput onChangeText={text => this.set_password(text)}/>
      </View>
      <View>
        <Button onPress={this.handleSubmit} title="Login" />
        <Clock />
      </View>
		</View>
		);
    }


}

export default class Example extends Component {
  render() {
    return (
      <App>
        <Window style={{ width: 300, height: 300}}>
        <Login />
        </Window>
      </App>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
