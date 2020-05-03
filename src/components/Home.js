import React, { useState } from 'react';
import { connect } from 'react-redux';

import QuestionsPanel from './QuestionsPanel';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home = ({ user, questions, users, handleSaveQuestionAnswer }) => {
    const [tab, setTab] = useState(0);

      const handleChange = (event, newTab) => {
        setTab(newTab);
      };

    const anweredQuestions = questions.filter((q) => q.id in user.answers );
    const unanweredQuestions = questions.filter((q) => !(q.id in user.answers));

    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Unanwered Questions" {...a11yProps(0)} />
            <Tab label="Anwered Questions" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <QuestionsPanel
          tab={tab}
          questions={unanweredQuestions}
          users={users}
          index={0}
          action="Answer Poll"
        />
        <QuestionsPanel
          tab={tab}
          questions={anweredQuestions}
          users={users}
          index={1}
          action="Results"
        />
      </div>
    );
};

const mapStateToProps = ({ authUser, questions, users }) => ({
  user: users[authUser],
  users,
  questions: Object.values(questions),
});

export default connect(mapStateToProps)(Home);