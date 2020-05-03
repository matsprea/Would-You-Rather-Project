import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Topbar from './TopBar';

const App = ({ authUser, handleInitialData }) => {
  useEffect(() => {
    handleInitialData();
  }, [handleInitialData]);

  return authUser ? (
    <React.Fragment>
      <Topbar />
    </React.Fragment>
  ) : (
    <Login />
  );
};

const mapStateToProps = ({ authUser }) => ({ authUser });

export default connect(mapStateToProps, { handleInitialData })(App);
