import React from 'react';
import { connect } from 'react-redux';

import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import LinearProgress from '@material-ui/core/LinearProgress';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Result = ({ users, question, user }) => {
  const classes = useStyles();

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionVoted = user.answers[question.id];


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
          subheader={`by ${users[question.author].name}`}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          className={classes.cardHeader}
        />
        <CardContent>
          <List className={classes.root}>
            <ListItem selected={optionVoted === 'optionOne'}>
              {optionVoted === 'optionOne' && (
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
              )}
              <ListItemText
                inset={optionVoted !== 'optionOne'}
                primary={
                  <>
                    {question.optionOne.text}
                    <LinearProgress
                      value={(optionOneVotes / totalVotes) * 100}
                      variant="determinate"
                      color="primary"
                    />
                  </>
                }
                secondary={`${optionOneVotes} vote(s) - ${Math.round(
                  (optionOneVotes / totalVotes) * 100
                )}%${optionVoted === 'optionOne' ? ' - selected by you' : ''}`}
              />
            </ListItem>
            <ListItem selected={optionVoted === 'optionTwo'}>
              <LinearProgress
                value={(optionTwoVotes / totalVotes) * 100}
                variant="determinate"
                color="secondary"
              />
              {optionVoted === 'optionTwo' && (
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
              )}
              <ListItemText
                inset={optionVoted !== 'optionTwo'}
                primary={
                  <>
                    {question.optionTwo.text}
                    <LinearProgress
                      value={(optionTwoVotes / totalVotes) * 100}
                      variant="determinate"
                      color="primary"
                    />
                  </>
                }
                secondary={`${optionTwoVotes} vote(s) - ${Math.round(
                  (optionTwoVotes / totalVotes) * 100
                )}%${optionVoted === 'optionTwo' ? ' - selected by you' : ''}`}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

const mapStateToProps = ({ authUser, users }, { question }) => ({
  user: users[authUser],
  question,
  users,
});

export default connect(mapStateToProps)(Result);
