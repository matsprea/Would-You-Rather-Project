import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleSaveQuestion } from '../actions/questions';

import CardContent from '@material-ui/core/CardContent';
import FormLabel from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const NewPoll = ({ user, handleSaveQuestion }) => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [pollAdded, setPollAdded] = useState(false);

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (disabled) return;
    handleSaveQuestion(optionOne, optionTwo, user.id);
    setPollAdded(true);
  };

  const handleOptionOneChange = (event) => {
    event.preventDefault();
    setOptionOne(event.target.value);
  };
  const handleOptionTwoChange = (event) => {
    event.preventDefault();
    setOptionTwo(event.target.value);
  };

  const disabled = optionOne === '' || optionTwo === '';

  if (pollAdded) return <Redirect to="/" />;

  return (
    <Container component="main" maxWidth="sm">
      <Card>
        <CardHeader
          avatar={
            <Avatar variant="square" src={user.avatarURL} alt={user.name} />
          }
          title="Would you rather"
          subheader={`by ${user.name}`}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          className={classes.cardHeader}
        />
        <CardContent>
          <div>
            <form
              onSubmit={handleSubmit}
              className={classes.root}
              autoComplete="off"
            >
              <FormLabel component="legend">Would you rather...</FormLabel>
              <div>
                <TextField
                  id="outlined-option-one"
                  label="Option One"
                  type="input"
                  variant="outlined"
                  placeholder="Option One"
                  value={optionOne}
                  onChange={handleOptionOneChange}
                  fullWidth
                  required
                />
                <TextField
                  id="outlined-option-two"
                  label="Option Twod"
                  type="input"
                  variant="outlined"
                  placeholder="Option Two"
                  value={optionTwo}
                  onChange={handleOptionTwoChange}
                  fullWidth
                  required
                />
              </div>

              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
                disabled={disabled}
              >
                Submit
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

const mapStateToProps = ({ authUser, users }) => ({
  user: users[authUser],
});

export default connect(mapStateToProps, { handleSaveQuestion })(NewPoll);
