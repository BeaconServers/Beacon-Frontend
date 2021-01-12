import React from 'react';
import styles from '../css/Login.css';
import logo from '../assets/images/beacon_logo_64_64.png';

class Login extends React.Component {
  state = {
        username: "",
        password: ""
  };

  set_username = event => {
        this.setState({ username: event.target.value });
        };

  set_password = event => {
    this.setState({ password: event.target.value });
  };



    post(scriptName, flag1, flag2) {
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
    componentDidMount() {
        console.log('mounted!');
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username);
	console.log(this.state.password);
	this.post("login", this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" id="login">
                    <h2 className="ui purple image header">
                        <img src={logo} className="image" />
                            <div className="content">
                                Log-In to your Beacon Account
                            </div>
                    </h2>
                    <form className="ui large form" onSubmit={this.handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon">
                                    </i>
                                    <input type="text" name="username" placeholder="Username" onChange={this.set_username} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon">
                                    </i>
                                    <input type="password" name="password" placeholder="Password" onChange={this.set_password}/>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon">
                                        </i>
                                        <input type="password" name="password" placeholder="Password" />
                                    </div>
                                </div>
                                <button type="submit" className="ui fluid large purple submit button">Login</button>
                            </div>
                            <button type="submit" className="ui fluid large purple submit button">Login</button>
                        </div>
                    </form>
                    <div className="ui message">
                        New to us? &nbsp;
                        <a href="/register">Sign Up</a>
                    </div>
                    <div className="ui message">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
