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
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Stuff from "./components/stuff/Stuff";
import CoolStuff from "./components/coolstuff/CoolStuff";
import Contact from "./components/contact/Contact";
import Navbar from "./components/layout/Navbar"

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <Navbar />
                <Switch>              
                    <div>
                    <h1>React Web App Wireframe</h1>
                    <ul className="header">
                        <li><Link exact to="/">Home</Link></li>
                        <li><Link to="/stuff">Stuff</Link></li>
                        <li><Link to="/coolstuff">Cool Stuff</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/coolstuff" component={CoolStuff} />
                        <Route path="/contact" component={Contact} />
                    </div>
                    </div>
                </Switch> 
            </HashRouter>
            
        );
    }
}

export default Main;