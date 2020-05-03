import React from 'react';
import { connect } from 'react-redux';

import BadPath from './BadPath';
import Result from './Result';
import Question from './Question';


const Poll = ({question, badPath, viewResult}) => {  

  if (badPath)
    return <BadPath />;

  if (viewResult)
    return <Result question={question}  />;

  return <Question question={question}  />;
};

const mapStateToProps = ({ authUser, questions, users }, { match }) => {
  const { question_id } = match.params;
  const badPath = !(question_id in questions);
  const user= users[authUser];

  return {
    badPath,
    question: badPath ? {} : questions[question_id],
    viewResult: question_id in user.answers
  };
};

export default connect(mapStateToProps)(Poll);
