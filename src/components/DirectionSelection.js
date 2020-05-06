import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import "../css/DirectionSelection.css";



class DirectionSelection extends Component {

  // constructor(props) {
  //   super(props);
  //   this.addActiveClass= this.addActiveClass.bind(this);
  //   this.state = {
  //       active: false,
  //   };
  // }

  // toggleClass() {
  //   const currentState = this.state.active;
  //   this.setState({ active: !currentState });
  // };


  render() {
   return (
    <ButtonGroup className="buttonGroup">
      <Button className = "noSelectedButton" onClick={this.toggleClass}>Uptown</Button>
      <div className="horizontalDivider"/>
      <Button className = "noSelectedButton" onClick={this.toggleClass}>Downtown</Button>
    </ButtonGroup>


      // <div>
      //     {['Uptown', 'Downtown'].map(key => 
      //         <button className={key === this.state.selectedButton 
      //           ? 'selected' 
      //           : ''} type="button" style={{ width: '100px', border: "30%" }} key={key} onClick={this.buttonSelected(key)}>{key}</button>
      //     )}
      // </div>
   );

  }
}

export default DirectionSelection;