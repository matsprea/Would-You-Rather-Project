import React from 'react';
import { connect } from 'react-redux';

import { setAuthUser } from '../actions/authUser';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { CircularProgress, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    width: '33%',
    position: 'relative',
    height: 150,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
  },
}));

const Login = ({ users, loading, setAuthUser }) => {
  const classes = useStyles();

  const handleButton = (event, user) => {
    event.preventDefault();
    if (user !== '') setAuthUser(user);
  };

  return loading ? (
    <LinearProgress />
  ) : (
    <Container>
      <Typography component="h1" variant="h1" className={classes.title}>
        Would You Rather
      </Typography>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Select a User
          </Typography>
          <div className={classes.root}>
            {users ? (
              users.map((user) => (
                <ButtonBase
                  focusRipple
                  key={user.id}
                  className={classes.image}
                  focusVisibleClassName={classes.focusVisible}
                  onClick={(event) => handleButton(event, user)}
                >
                  <span
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${user.avatarURL})`,
                    }}
                  />
                  <span className={classes.imageBackdrop} />
                  <span className={classes.imageButton}>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      className={classes.imageTitle}
                    >
                      {user.name}
                      <span className={classes.imageMarked} />
                    </Typography>
                  </span>
                </ButtonBase>
              ))
            ) : (
              <CircularProgress />
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  users: Object.values(users),
  loading: authedUser === null,
});

export default connect(mapStateToProps, { setAuthUser })(Login);
