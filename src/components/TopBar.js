import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setAuthUser } from '../actions/authUser';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const TopBar = ({ user, setAuthUser }) => {
  const classes = useStyles();

  const handleLogOut = (event) => {
    event.preventDefault();
    setAuthUser('');
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Would You Rather
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            to="/"
            className={classes.link}
            component={NavLink}
          >
            Home
          </Link>
          <Link
            variant="button"
            color="textSecondary"
            to="/add"
            className={classes.link}
            component={NavLink}
          >
            New poll
          </Link>
          <Link
            variant="button"
            color="textSecondary"
            to="/leaderboard"
            className={classes.link}
            component={NavLink}
          >
            Leaderboard
          </Link>
        </nav>
        <Avatar variant="square" alt={user.name} src={user.avatarURL} />
        <Button
          color="primary"
          variant="outlined"
          className={classes.link}
          onClick={handleLogOut}
        >
          Logout {user.name}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({ users, authUser }) => ({
  user: users[authUser],
});

export default connect(mapStateToProps, { setAuthUser })(TopBar);
