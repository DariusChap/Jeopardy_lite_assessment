import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import Jeopardy from './components/jeopardy/Jeopardy';
import Error from './components/error/Error';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navigation />
     
     <Switch>
     <Route 
     exact 
     path="/" exact 
     render={(props) => <Welcome {...props} name="Darius" />} 
     />
     <Route exact 
     path="/welcome/:name" 
     render={(props) => <Welcome {...props} name={props.match.params.name} />} />
     <Route exact path="/clock" exact component={Clock}/>
     <Route exact path="/contact" exact component={Contact}/>
     <Route exact path="/jeopardy" exact component={Jeopardy} />
     <Route exact component={Error} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
