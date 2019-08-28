/**
 * Displaying the Initial Frame
 * When building a SPA, there will always be a part of your page that will remain static. 
 * This static part, also referred to as an app frame, 
 * could just be one invisible HTML element that 
 * acts as the container for all of your content, 
 * or could include some additional visual things like a * header, 
 * footer, navigation, etc. 
 * In our case, 
 * our app frame will just be a component that contains UI elements for our navigation
 * header and an empty area for content to load in.
 */
import React, { Component } from "react";
/** The HashRouter component provides the foundation for the navigation
 *  and browser history handling that routing is made up of.
 */
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>API Tester</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
            
        );
    }
}

export default Main;