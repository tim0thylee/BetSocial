import React, { Component } from 'react';
import background from "./background.jpg";
import "./MainImage.css";
import PaperSheet from "../Paper";

class MainImage extends Component{ 
    render() {
        return(
            <div className="image">
                <img src={background} alt="background" className="center" />
            </div>
        )
    }

}

export default MainImage;

