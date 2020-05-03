import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import './css/App.css';

const App = ({handleInitialData}) => {
  useEffect(() => {
    handleInitialData();
  });

  return (
    <div className="App">
      <header className="App-header"> Would You Rather </header>
    </div>
  );
};

const mapStateToProps = () => (null)

export default connect(mapStateToProps, { handleInitialData })(App);