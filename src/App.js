import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from './views/LoginView';
import IndexPage from './views/IndexView';
import SignupView from './views/SignupView';
import EditMusicView from './views/EditMusicView';
import EditUserView from './views/EditUserView';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupView} />
          <Route exact path="/editMusic" component={EditMusicView} />
          <Route exact path="/editUser" component={EditUserView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
