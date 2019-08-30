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
import { Route, Link, BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/layout/Navbar';
//import Landing from './components/layout/landing';
import Routes from './components/routing/Routes';

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />                    
                    <Route component={Routes} />         
            </Router>
            
        );
    }
}

export default App;