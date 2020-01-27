import React, { Component } from "react";
import SideBar from './mainComponents/sideBar.jsx';

class Main extends Component {
    render() {
        return(
            <div>
                {SideBar}
            </div>
        )
    }
}

export default Main;