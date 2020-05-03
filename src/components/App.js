import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import './css/App.css';

const App = ({authUser, handleInitialData}) => {
  useEffect(() => {
    handleInitialData();
  });

  return authUser ? (
    <div className="App">
      <header className="App-header"> Would You Rather </header>
    </div>
  ) : (
    <div className="App">
      <header className="App-header"> Would You Rather </header>
    </div>
  );
};

const mapStateToProps = ({authUser}) => ({authUser})

export default connect(mapStateToProps, { handleInitialData })(App);