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
    render() {
        fetch('http://127.0.0.1/login.php').then(function (response) {
            console.log("Got it!");
        }, function(e) {
            console.log("Error!");
        });
        return(
            <div className={styles.root}>
                <h1>{this.state.gameName}</h1>
                <p>Server Regions</p>
            </div>
        );
    }
}

export default ServerForm;