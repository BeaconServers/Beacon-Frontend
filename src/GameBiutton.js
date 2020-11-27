import React, { Component } from 'react';
import './App.css';
import img_elTf2 from './images/GameBiutton_elTf2_102396.jpg';

export default class GameBiutton extends Component {

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
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_elTf2 = {
      backgroundImage: 'url('+img_elTf2+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elTextBlock = {
      fontSize: 27.5,
      color: '#fdfffa',
      textAlign: 'left',
     };
    
    return (
      <div className="GameBiutton">
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
          
          <div className="elTf2" style={style_elTf2} />
        </div>
        
        <div className="foreground">
          <div className="font-osaka  elTextBlock" style={style_elTextBlock}>
            <div>{this.props.locStrings.component1_textblock_238288}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
