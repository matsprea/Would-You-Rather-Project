import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Topbar from './TopBar';
import Home from './Home';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';
import Question from './Question';
import BadPath from './BadPath';

const App = ({ authUser, handleInitialData }) => {
  useEffect(() => {
    handleInitialData();
  }, [handleInitialData]);
  
  return (
    <Router>
      {!!authUser ? (
        <>
          <Topbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/questions/:question_id" component={Question} />
            <Route exact path="/add" component={NewPoll} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route component={BadPath} />
          </Switch>
        </>
      ) : (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route component={() => <Redirect to='/' />} />
          </Switch>
      )}
    </Router>
  );
};

const mapStateToProps = ({ authUser }) => ({ authUser });

export default connect(mapStateToProps, { handleInitialData })(App);
