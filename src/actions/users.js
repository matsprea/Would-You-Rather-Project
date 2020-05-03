import { _saveQuestionAnswer } from '../utils/_DATA';
import { addAnswerToQuestion } from '../actions/questions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users,
})

export const addAnswerToUser = (authUser, qid, answer) => ({
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid,
    answer,
})

//TODO: Optimistic update
export const handleSaveQuestionAnswer = (authUser, qid, answer) => (dispatch) => _saveQuestionAnswer(authUser, qid, answer).then(() => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));
})

export const addQuestionToUser = ({ id, author }) => ({
    type: ADD_QUESTION_TO_USER,
    id,
    author,
})