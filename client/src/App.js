import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import result  from './store';
const { store, persistor } = result;

import Navbar from './components/Navbar';
import Profile from './components/User/Profile';
import Home from './components/Pages/Home';
import Explore from './components/Pages/Explore';
import GroupInfo from './components/Groups/Info/GroupInfo';
import GroupChat from './components/Groups/Chat/GroupChat';
import Common from './components/Common';

const App = () => {;

  return (
    <Router>
    <Provider store = {store}>
    <PersistGate persistor={ persistor } >
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/explore' component={Explore} />  
        </Switch>
        <Common />
        <Switch>
          <Route exact path='/group' component={GroupChat} />
          <Route exact path='/group/info' component={GroupInfo} />
        </Switch>
      </Fragment>
      </PersistGate>
    </Provider>
    </Router>
  )
}

export default App
// Theme = https://coolors.co/03045e-0077b6-00b4d8-90e0ef-caf0f8 