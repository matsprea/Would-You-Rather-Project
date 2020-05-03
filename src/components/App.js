import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Topbar from './TopBar';
import Home from './Home';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';
import Question from './NewPoll';

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
            <Route path="/add" component={NewPoll} />
            <Route path="/leaderboard" component={Leaderboard} />
          </Switch>
        </>
      ) : (
        <Route component={Login} />
      )}
    </Router>
  );
};

const mapStateToProps = ({ authUser }) => ({ authUser });

export default connect(mapStateToProps, { handleInitialData })(App);
