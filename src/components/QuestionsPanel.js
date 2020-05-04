import React from 'react';
import { NavLink } from 'react-router-dom';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  options: {
    textAlign: 'center',
  },
}));

const QuestionPanel = ({ tab, questions, users, index, action }) => {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={tab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {tab === index && (
        <Container component="main" maxWidth="sm">
          <Grid container spacing={5} alignItems="flex-end">
            {questions.map((question) => (
              <Grid item key={question.id} xs={12} sm={12} md={12}>
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
                    >
                      {action}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default QuestionPanel;
