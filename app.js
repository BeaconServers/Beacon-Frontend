import React, { Component } from "react"; // import from react
import { Window, App, Text, Button, TextInput, View, StyleSheet, Image} from "proton-native"; // import the proton-native components
import logo from './assets/images/beacon_logo_64_64.png'


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click secured');
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <Button onClick={this.handleClick} title={this.state.isToggleOn ? 'ON' : 'OFF'} />        
    );
  }
}


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
  componentDidMount(){
    console.log('hello world!');
  }

  log_stuff(){
    console.log("Hello!")
  }

    render() {
        return (
		<View>
			<View>
				<Text>Log-In to your Beacon Account</Text>
			</View>
			<View>
        <Text>Username:</Text>
				<TextInput placeholder={"Username"} placeholderTextColor={"#ffffff"} />
			</View>
      <View>
        <Text>Password:</Text>
        <TextInput placeholder={"Password"} secureTextEntry={true} onChange={this.set_password}/>
      </View>
      <View>
        <Toggle />
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
