import React from 'react';
import '../css/Register.css';
import logo from '../assets/images/beacon_logo_64_64.png';

class Register extends React.Component {

	state = {
		username: "",
		email: "",
		password: "",
        passwordVerify: ""
	};

    set_username = event => {
    	this.setState({ username: event.target.value });
  	};

  set_email= event => {
    this.setState({ email: event.target.value });
  };

  set_password = event => {
    this.setState({ password: event.target.value });
  };

   set_password_verify = event => {
      this.setState({passwordVerify: event.target.value });
   }


	post(scriptName, flag1, flag2, flag3) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log(this.responseText);

        };

        xhttp.open("POST", `http://127.0.0.1/${scriptName}.php`, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(`username=${flag1}&email=${flag2}&password=${flag3}`);

    }
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
      this.setState({loopReady: true});
      console.log('mounted!');
    }

    handleSubmit(event) {
        event.preventDefault();
        this.post("register", this.state.username, this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" id="register">
                    <h2 className="ui purple image header">
                        <img src={logo} className="image" />
                            <div className="content">
                                Register a Beacon Account
                            </div>
                    </h2>
                    <form className="ui large form" onSubmit={this.handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon" />
                                    <input type="text" name="username" placeholder="Username" onChange={this.set_username} />
                                </div>
                            </div>

							<div className="field">
                                <div className="ui left icon input">
                                    <i className="envelope icon" />
                                    <input type="text" name="email" placeholder="Email" onChange={this.set_email}/>
                                </div>
                            </div>

							<div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon" />
                                    <input type="password" name="password" placeholder="Password" onChange={this.set_password}/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon" />
                                    <input type="password" name="passwordVerify" placeholder="Verify your password" onChange={this.set_password_verify}/>
                                </div>
                            </div>
                            <button type="submit" className="ui fluid large purple submit button" id="registerBtn">Sign Up</button>
                            <div className="ui message">
                                Already a user? &nbsp;
                                <a href="/login">Log In</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function ResultMessage(props) {
    const messageType = props.messageType;
    if (messageType == 0) {
        return null;
    } else if (messageType == 1) {
        return (
            <div className="ui message">
                <div className="header">
                    Account created succesfully!
                </div>
                <p>You will be redirected in a moment</p>
            </div>
        );
    } else if (messageType == 2) {
        return (
            <div className="ui message">
                <div className="header">
                    Error
                </div>
                <p>We could not reach a connection to the server. Please try refreshing the page.</p>
            </div>
        );
    }
}

export default Register;
