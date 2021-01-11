import React from 'react';
import '../css/Login.css';
import logo from '../assets/images/beacon_logo_64_64.png';

class Login extends React.Component {

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
        this.post("login", document.getElementsByName("username").values(), document.getElementsByName("password").values());
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
                                    <input type="text" name="username" placeholder="Username" />
                                </div>
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
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;