import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '50px',
    height: '50px',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  options: {
    textAlign: 'center',
  },
}));

const Poll = (question, users, badPath, user) => {
  const classes = useStyles();

  return (
    <Container component="main">
      <Grid container spacing={5} alignItems="flex-end">
        <Grid item key={question.id} xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  <img
                    className={classes.avatarImg}
                    src={users[question.author].avatarURL}
                    alt={users[question.author].name}
                  />
                </Avatar>
              }
              title="Would you rather"
              subheader={`by ${question.author}`}
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{ align: 'center' }}
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.options}>
                <Typography component="p" color="textPrimary">
                  {question.optionOne.text}
                </Typography>
                <Typography component="p" color="textSecondary">
                  - OR -
                </Typography>
                <Typography component="p" color="textPrimary">
                  {question.optionTwo.text}
                </Typography>
              </div>
              <ul></ul>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                to={`/questions/${question.id}`}
                component={NavLink}
              ></Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({ authUser, questions, users }, { question_id }) => ({
  user: users[authUser],
  users,
  question: question_id in questions ? questions[question_id] : null,
  badPath: !(question_id in questions),
});

export default connect(mapStateToProps)(Poll);
