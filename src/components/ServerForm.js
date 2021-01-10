import React from 'react';
import styles from '../css/ServerForm.module.css';

class ServerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            game: this.props.game,
            gameName: this.props.gameName,
            gameid: this.props.gameid,
            availableRegions: null,
            availableConnections: null,
            availableModes: null,
            formSelectedRegions: null,
            formSelectedConnections: null,
            formSelectedModes: null,
            formMaximumPing: null
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'shelby', password: 'kelly' })
        };

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log(this.responseText);

        };
        xhttp.open("POST", "http://127.0.0.1/register.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("username=Henry&password=Ford&email=henry@gmail.com");
    }

    render() {
        return(
            <div className={styles.root}>
                <h1>{this.state.gameName}</h1>
                <p>Server Regions</p>
            </div>
        );
    }
}

export default ServerForm;