import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
 import { PrivateRoute } from '../components/helpers/app/PrivateRoute';

 // firebase instance
 import Firebase from '../firebase';

 // Routes for different pages
 import * as ROUTES from '../constants/routes';
 
 // Pages of the application
 import LandingPage from '../components/pages/LandingPage';
 import HomePage from '../components/pages/HomePage';
 import AccountPage from '../components/pages/AccountPage';
 import ProblemsPage from '../components/pages/ProblemsPage';
 


// TODO
// - firebase context in this class
// - user signup/login

class App extends Component {
  
  /**
   * Create the state of the application
   */
  constructor(props){
    super(props);
    this.state = {
      loggedIn: true,
      
    }
  }

  /**
   * Render the pages the user requests depending if they are logged in or not.
   */
  render(){

    return(
      <Router>
        <Route exact path={ROUTES.LANDING} component={LandingPage} firebase={Firebase} /> 
        <PrivateRoute path={ROUTES.HOME} component={HomePage} firebase={Firebase} />
        <PrivateRoute path={ROUTES.ACCOUNT} component={AccountPage} firebase={Firebase} />
        <PrivateRoute path={ROUTES.PROBLEMS} component={ProblemsPage} firebase={Firebase} />
      </Router>
    );
    
  }

}


/**
 * 
 */
export default App;
