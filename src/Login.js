import React from 'react';
import './css/Login.css';
import logo from './assets/images/beacon_logo_64_64.png';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const btn = document.querySelector('input');
        console.log(document.getElementsByName("email").value);
    }

    componentDidMount() {
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
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon">
                                    </i>
                                    <input type="text" name="email" placeholder="E-Mail Address" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon">
                                    </i>
                                    <input type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <button onclick={this.handleClick} type="submit" className="ui fluid large purple submit button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;