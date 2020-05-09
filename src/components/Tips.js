import React from "react";
import Popup from "reactjs-popup";
import {Button} from 'react-bootstrap';
import "../css/tips.css"


function Darken(props) {
    if(props.selected){
    
    return <div id="page-mask"></div> 
    
    }
    return null;
}

export default class TipButton extends React.Component{
    constructor(props){
        super(props)
        this.state = [{
            selected: false
        }
        ]
    }
    lighten()  {
        
           this.setState({selected: !this.state.selected})
           
        
    }

    
    render() {
        return (
            <div style={{"display":"inline"}}>
            <Darken selected={this.state.selected}/>
                <Popup trigger={<Button value="?"
                    style={{'width': 'min(5vw,20px)','height':'min(5vw,20px)',
                    'borderRadius':"50%",
                    'background-color':'light-gray',
                    "border":"1px solid gray",
                    "fontSize": "90%"
                   }}
                    >?</Button>}
                    
               arrowStyle={
                   {'background-color':' #B1FAFF'}
               }     
        position="bottom center"
        contentStyle={{'borderRadius':"10px",
        'background-color': '#B1FAFF',
        'color':'black',
        'font':'arial',
        'textAlign':'justify'
        }}
        onOpen={()=>this.lighten()}
        onClose={()=>this.lighten()} >
            
         <div id="modal">{this.props.message}</div></Popup>
         </div>       
           );

    }
}