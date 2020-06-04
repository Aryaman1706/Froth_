import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navbar';
import Profile from './components/User/Profile';
import Home from './components/Pages/Home';
import Explore from './components/Pages/Explore';
import GroupInfo from './components/Groups/GroupInfo';

const App = () => {;

  return (
    <Router>
    <Provider store = {store}>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/explore' component={Explore} />
          <Route exact path='/group/info' component={GroupInfo} />
        </Switch>
      </Fragment>
    </Provider>
    </Router>
  )
}

export default App
// Theme = https://coolors.co/03045e-0077b6-00b4d8-90e0ef-caf0f8 