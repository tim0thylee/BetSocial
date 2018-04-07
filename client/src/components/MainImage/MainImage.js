import React, { Component } from 'react';
import background from "./background.jpg";

class MainImage extends Component{ 
    render() {
        return(
            <div className="image">
                <img src={background} alt="background" class="backgroud" />
            </div>
        )
    }

}

export default MainImage;

