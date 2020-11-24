import React, { Component } from 'react';
import './App.css';
import FirebaseLogin from './FirebaseLogin';

export default class Comp_login extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  render() {
    const style_elFirebaseLogin = {
      pointerEvents: 'auto',
     };
    
    return (
      <div className="Comp_login">
        <div className="layoutFlow">
          <div className="elFirebaseLogin">
            <div style={style_elFirebaseLogin}>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
