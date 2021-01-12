import React from 'react';
import '../css/Login.css';
import logo from '../assets/images/beacon_logo_64_64.png';

class Register extends React.Component {
	state = {
		username: "",
		email: "",
		password: ""
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
                                    <i className="user icon" />
                                    <input type="text" name="email" placeholder="Email" onChange={this.set_email}/>
                                </div>
                            </div>

							<div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon" />
                                    <input type="password" name="password" placeholder="Password" onChange={this.set_password}/>
                                </div>
                            </div>
                            <button type="submit" className="ui fluid large purple submit button">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
