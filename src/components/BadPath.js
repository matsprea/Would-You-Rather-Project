import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({}));

const BadPath = () => {
  const classes = useStyles();

  return (
    <Container component="main">
      Bad Path
      <Button
        fullWidth
        variant="outlined"
        color="primary"
        to='/'
        component={NavLink}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default BadPath;
