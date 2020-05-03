import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import './css/App.css';

const App = ({ authUser, handleInitialData }) => {
  useEffect(() => {
    handleInitialData();
  }, [handleInitialData]);

  return authUser ? (
    <div className="App">
      <header className="App-header"> Would You Rather </header>
    </div>
  ) : (
    <Login />
  );
};

const mapStateToProps = ({ authUser }) => ({ authUser });

export default connect(mapStateToProps, { handleInitialData })(App);
