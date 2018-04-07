import React, { Component } from 'react';
import background from "./background.jpg";
import "./MainImage.css"

class MainImage extends Component{ 
    render() {
        return(
            <div className="image">
                <img src={background} alt="background" class="center" />
            </div>
        )
    }

}

export default MainImage;

