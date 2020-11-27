import React, { Component } from 'react';
import './App.css';
import btn_icon_1043681 from './images/btn_icon_1043681.png';
import btn_icon_622393 from './images/btn_icon_622393.png';

export default class Cmp_GameMenu_folder extends Component {

  // Properties used by this component:
  // visualStateIndex

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

  // --- Functions for component state index 0 (1 of 2) --- 
  
  onClick_state0_elBtn_state11043681 = (ev) => {
  
  }
  
  
  onClick_state0_elIconButtonCopy622393 = (ev) => {
  
  }
  
  
  renderState0() {
    const style_state0_elBackground986923 = {
      width: '100%',
      height: '100%',
     };
    const style_state0_elBackground986923_outer = {
      backgroundColor: '#ecf6ee',
      filter: 'drop-shadow(0.0px 0.0px 0px rgba(0, 0, 0, 0.3333))',
      overflow: 'visible',
     };
    
    const style_state0_elBtn_state11043681 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_1043681+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '53.982%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state0_elText509402 = {
      fontSize: 23.8,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elIconButtonCopy622393 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_622393+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '53.982%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="Cmp_GameMenu_folder">
        <div className="background">
          <div className="containerMinHeight state0_elBackground986923" style={style_state0_elBackground986923_outer}>
            <div style={style_state0_elBackground986923} />
          </div>
        </div>
        
        <div className="foreground">
          <button className="actionFont state0_elBtn_state11043681" style={style_state0_elBtn_state11043681} onClick={this.onClick_state0_elBtn_state11043681}  />
          <div className="systemFontRegular  state0_elText509402" style={style_state0_elText509402}>
            <div>{this.props.locStrings.cmp_gamemenu_folder_text_509402}</div>
          </div>
          <button className="actionFont state0_elIconButtonCopy622393" style={style_state0_elIconButtonCopy622393} onClick={this.onClick_state0_elIconButtonCopy622393}  />
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  onClick_state1_elBtn_state11043681 = (ev) => {
  
  }
  
  
  onClick_state1_elIconButtonCopy622393 = (ev) => {
  
  }
  
  
  renderState1() {
    const style_state1_elBackground986923 = {
      width: '100%',
      height: '100%',
     };
    const style_state1_elBackground986923_outer = {
      backgroundColor: '#ecf6ee',
      filter: 'drop-shadow(0.0px 0.0px 0px rgba(0, 0, 0, 0.3333))',
      overflow: 'visible',
     };
    
    const style_state1_elBtn_state11043681 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_1043681+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '53.982%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state1_elText509402 = {
      fontSize: 23.8,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state1_elIconButtonCopy622393 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_622393+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '53.982%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="Cmp_GameMenu_folder">
        <div className="background">
          <div className="containerMinHeight state1_elBackground986923" style={style_state1_elBackground986923_outer}>
            <div style={style_state1_elBackground986923} />
          </div>
        </div>
        
        <div className="foreground">
          <button className="actionFont state1_elBtn_state11043681" style={style_state1_elBtn_state11043681} onClick={this.onClick_state1_elBtn_state11043681}  />
          <div className="systemFontRegular  state1_elText509402" style={style_state1_elText509402}>
            <div>{this.props.locStrings.cmp_gamemenu_folder_text_509402}</div>
          </div>
          <button className="actionFont state1_elIconButtonCopy622393" style={style_state1_elIconButtonCopy622393} onClick={this.onClick_state1_elIconButtonCopy622393}  />
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  
}
