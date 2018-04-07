import React, { Component } from "react";
import background from "./background.jpg";
import "./Background.css";

class Background extends Component{
    render() {
        return(
            <div className="image">
                <img src={background} alt="background" class="background" />
            </div>
        )
    }
}

export default Background;


 


  
 