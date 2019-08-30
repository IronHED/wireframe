import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import CoolStuff from '../coolstuff/CoolStuff';
import Stuff from '../stuff/Stuff';
import Contact from '../contact/Contact';


const Routes = () => {
    return (
        <section className='container'>
          
            
                <Route exact path='/' component={Home} />
                <Route exact path='/coolstuff' component={CoolStuff} />
                <Route exact path='/stuff' component={Stuff} />
                <Route exact path='/contact' component={Contact} />
            
        </section>
    );
};

export default Routes;
