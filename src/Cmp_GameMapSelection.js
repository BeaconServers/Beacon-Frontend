import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Checkbox from 'muicss/lib/react/checkbox';

export default class Cmp_GameMapSelection extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      checkbox: 'false',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  checkboxChanged_elCheckbox = (event) => {
    this.setState({checkbox: (event.target.checked ? 'true' : 'false')});
  }
  
  render() {
    let checked_checkbox = this.state.checkbox;
    
    const style_elCheckbox = {
      color: '#f3fff6',
      fontSize: 19.0,
      pointerEvents: 'auto',
     };
    
    return (
      <div className="Cmp_GameMapSelection highlightBg">
        <div className="layoutFlow">
          <div className="elCheckbox">
            <Checkbox className="font-osaka" style={style_elCheckbox}  label={this.props.locStrings.cmp_gamemapselection_checkbox_80271} onChange={this.checkboxChanged_elCheckbox} checked={checked_checkbox === 'true' || checked_checkbox === true || ''+checked_checkbox === '1'}  />
          </div>
        </div>
        
      </div>
    )
  }
  
}
