import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default class FirebaseLogin extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isSignedIn: false
    };

    this.autosignInEnabled = true;
    
    this.firebaseUIConfig = {
      signInFlow: 'popup',
      signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          //var credential = authResult.credential;
          //var isNewUser = authResult.additionalUserInfo.isNewUser;
          //var providerId = authResult.additionalUserInfo.providerId;
          //var operationType = authResult.operationType;
          return false;
        },
        signInFailure: (error) => {
          console.error("** Firebase sign-in failed: ", error);
          this.loginFailed(error);
          return false;
        },
      }
    };
  }
  
  saveCurrentUserDataInApp() {
    var user = firebase.auth().currentUser;
    var userName = user.displayName;
    var email = user.email;
    var userPhotoUrl = user.photoURL;
    var userId = user.uid;
    var userPhoneNumber=user.phoneNumber;
    console.log("got user: %s, %s, uid %s", userName, email, userId,userPhoneNumber );
    
    ((v) => { this.props.appActions.updateDataSlot("ds_client_username", v) })(userName);
    ((v) => { this.props.appActions.updateDataSlot("ds_client_email", v) })(email || '');
    ((v) => { this.props.appActions.updateDataSlot("ds_client_photo_url", v) })(userPhotoUrl);
    ((v) => { this.props.appActions.updateDataSlot("ds_client_id", v) })(userId);
    
        
  }

  loginSuccess() {
    sessionStorage.setItem('loginStatus_signIn', 'active');
    this.props.appActions.goToScreen('mainMenu');
    

  }
  
  loginFailed(err) {
    // This is typically never called by Firebase UI because the sign-in flow is handled as a popup.
    // We're including this code from React Studio as documentation for other plugins.

  }
  
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => {
          this.setState({isSignedIn: !!user});
          if (user != null) {
            this.saveCurrentUserDataInApp();
            this.loginSuccess();
          }
        }
    );
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if ( !this.state.isSignedIn) {
      return (
        <StyledFirebaseAuth uiCallback={ui => {if (!this.autosignInEnabled) ui.disableAutoSignIn();}} uiConfig={this.firebaseUIConfig} firebaseAuth={firebase.auth()}/>
      )
    } else {
      return null;
    }
  }
}
