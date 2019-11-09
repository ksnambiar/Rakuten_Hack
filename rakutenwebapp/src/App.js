import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import {Provider} from "react-redux"
import Login from "./Component/Login/Login"
import Navigation from "./Component/Common/Navigation"
import Landing from "./Component/Common/Landing"
import Dashboard from "./Component/Dashboard/Dashboard"
import CropCycle from "./Component/cropCycle/CropCycle"
import Market from "./Component/Market/Market"
import Store from "./Store/Store"
import PlantDoctor from "./Component/PlantDoctor/PlantDoctor"
import PrivateRoute from "./Component/Common/PrivateRoute"
import "tachyons"
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import 'react-open-weather/lib/css/ReactWeather.css';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"
function App() { 
  return (
    <div className="App">
      <Provider store={Store}>
      <Router>
        <Navigation />
        <div className="container-fluid">
        <Route exact path='/' component={Landing} />
        <Route exact path='/auth' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/cropCycle' component={CropCycle} />
        <Route exact path='/market' component={Market} />
        <Route exact path='/plantDoc' component={PlantDoctor}/>
        </div>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
