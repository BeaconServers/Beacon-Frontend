import React, { Component } from 'react';
import './App.css';
import img_elImg_beacon_logo from './images/SignInScreen_elImg_beacon_logo_1003323.png';
import Comp_login from './Comp_login';
import FirebaseLogin from './FirebaseLogin';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

export default class SignInScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
    // Check if Firebase login has been completed.
    let unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          if (firebase.auth().currentUser) {
            if (this._elFirebaseLogin)
              this._elFirebaseLogin.saveCurrentUserDataInApp();
            
            sessionStorage.setItem('loginStatus_signIn', 'active');
            this.props.appActions.goToScreen('mainMenu');
            
          }
        }
        unregisterAuthObserver();
      }
    );
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#772dc8',
     };
    const style_elImg_beacon_logo = {
      height: 'auto',
     };
    const style_elTxt_login = {
      fontSize: 18.0,
      color: '#0c63ff',
      textAlign: 'center',
     };
    const style_elFirebaseLogin = {
      pointerEvents: 'auto',
      display: 'none',
     };
    const style_elTextBlock = {
      fontSize: 15.2,
      color: '#fefffa',
      textAlign: 'left',
     };
    // eslint-disable-next-line no-unused-vars
    const style_elTextBlock_inner = {
      textAlign: 'left',
     };
    
    return (
      <div className="AppScreen SignInScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div style={style_elBackground} />
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <img className="elImg_beacon_logo" style={style_elImg_beacon_logo} src={img_elImg_beacon_logo} alt=""  />
            <div className="font-goodTimesRgRegular  elTxt_login" style={style_elTxt_login}>
              <div>{this.props.locStrings.mainlogin_textblock_519867}</div>
            </div>
            <div className="hasNestedComps elComp_login">
              <Comp_login ref={(el)=> this._elComp_login = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="elFirebaseLogin" style={style_elFirebaseLogin}>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="font-helvetica  elTextBlock" style={style_elTextBlock}>
              <div className="bottomAlignedContent">{this.props.locStrings.signin_textblock_588784}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
