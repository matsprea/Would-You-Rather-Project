import React from 'react';
import { connect } from 'react-redux';

import { setAuthUser } from '../actions/authUser';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
            href="/"
            className={classes.link}
          >
            Home
          </Link>
          <Link
            variant="button"
            color="textSecondary"
            href="/add"
            className={classes.link}
          >
            New poll
          </Link>
          <Link
            variant="button"
            color="textSecondary"
            href="/leaderboard"
            className={classes.link}
          >
            Leaderboard
          </Link>
        </nav>
        <Avatar variant="square" alt={user.name} src={user.avatarURL} />

        <Button
          href="#"
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
