import React from 'react';
import { connect } from 'react-redux';

import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';

const Leaderboard = ({users}) => {
  let sortedUsers = users
    .map((user) => ({
      ...user,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.total - a.total);

    const useStyles = makeStyles((theme) => ({
      options: {
        textAlign: 'center',
      },
    }));

    const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <Grid container spacing={5} alignItems="flex-end">
        {sortedUsers.map((user) => (
          <Grid item key={user.id} xs={12} sm={12} md={12}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    variant="square"
                    src={user.avatarURL}
                    alt={user.name}
                  />
                }
                title={user.name}
                subheader={`Score ${user.total}`}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                
              />
              <CardContent>
                <List className={classes.root}>
                  <ListItem>
                    <ListItemAvatar><Avatar>{user.answerCount}</Avatar></ListItemAvatar>
                    <ListItemText primary="Anwers" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar><Avatar>{user.questionCount}</Avatar></ListItemAvatar>
                    <ListItemText primary="Questions" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({ users }) => ({ users: Object.values(users) });

export default connect(mapStateToProps)(Leaderboard);
