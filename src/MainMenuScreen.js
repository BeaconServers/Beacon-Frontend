import React, { Component } from 'react';
import { db } from './App';
import './App.css';
import GameButton from './GameButton';
import btn_icon_back_mainmenu from './images/btn_icon_back_mainmenu.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class MainMenuScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo
  game_amount;

  constructor(props) {
    super(props);
    
    this.state = {
    };
    db.ref("client-game-amount").once('value').then((snapshot) => {
      this.game_amount = snapshot.val();
    })
    for(let i = 0; i < this.game_amount; i++) {
      db.ref('client-games/' + i).once('value').then((snapshot) => {
        console.log(snapshot.val);
      })
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elGameButton = (ev) => {
    // Go to screen 'scrn_GameMenu'
    this.props.appActions.goToScreen('scrn_GameMenu', { transitionId: 'slideIn_right' });
  
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
      backgroundColor: '#9050f6',
     };
    const style_elGameButton = {
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen MainMenuScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elGameButton">
            <div style={style_elGameButton} onClick={this.onClick_elGameButton} >
              <GameButton ref={(el)=> this._elGameButton = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="elSpacer">
            <div />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Main Menu</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_mainmenu} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
