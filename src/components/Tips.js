import React from "react";
import Popup from "reactjs-popup";
import {Button} from 'react-bootstrap';
import "../css/tips.css"

// document.addEventListener("DOMContentLoaded",() => {
//     const the_button = document.querySelector(".js-btn")
//     the_button.addEventListener("click", handleClick)
//   })

//   function handleClick(event) {
//     const modal = document.querySelector(".modal")
//     const closeBtn = document.querySelector(".close")
//     modal.style.display = "block";
//     closeBtn.addEventListener("click", () => {
//       modal.style.display = "none";
//     })
// }

export default class TipButton extends React.Component{

   
    render() {
        return (
            
                
                <Popup trigger={<Button value="?"
                    style={{'width': 'min(3vw,20px)','height':'min(3vw,20px)',
                    'borderRadius':"60%",
                    'background-color':'light-gray'}}
                    >?</Button>}
                    
                    
        position="right center" modal><div className="modal"><div className="content">{this.props.message}</div></div></Popup>
               
             
            
           );

    }
}