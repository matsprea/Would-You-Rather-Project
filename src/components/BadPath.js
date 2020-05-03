import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Container';

const BadPath = () => {

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
