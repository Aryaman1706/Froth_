import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import GroupModal from './components/GroupModal';
import Explore from './components/Explore';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/explore' component={Explore} />
        </Switch>
        <GroupModal />
      </Fragment>
    </Router>
  )
}

export default App
// Theme = https://coolors.co/03045e-0077b6-00b4d8-90e0ef-caf0f8 