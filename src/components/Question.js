import React, { useState } from 'react';
import { connect } from 'react-redux';

import { handleSaveQuestionAnswer } from '../actions/users';

import CardContent from '@material-ui/core/CardContent';
import FormLabel from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    textAlign: 'center',
  },
}));

const Question = ({ users, question, authUser, handleSaveQuestionAnswer }) => {
  const [response, setResponse] = useState('');
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSaveQuestionAnswer(authUser, question.id, response);
  };
  const handleRadioChange = (event) => {
    setResponse(event.target.value);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Card>
        <CardHeader
          avatar={
            <Avatar
              variant="square"
              src={users[question.author].avatarURL}
              alt={users[question.author].name}
            />
          }
          title="Would you rather"
          subheader={`by ${question.author}`}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          className={classes.cardHeader}
        />
        <CardContent>
          <div>
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Would you rather...</FormLabel>
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={response}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="optionOne"
                    control={<Radio />}
                    label={question.optionOne.text}
                  />
                  <FormControlLabel
                    value="optionTwo"
                    control={<Radio />}
                    label={question.optionTwo.text}
                  />
                </RadioGroup>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

const mapStateToProps = ({ authUser, users }, { question }) => ( {
    authUser,
    question,
    users,
});

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(Question);
