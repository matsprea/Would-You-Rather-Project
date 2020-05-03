import { _saveQuestion } from '../utils/_DATA';
import { addQuestionToUser } from '../actions/users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions,
})

export const addAnswerToQuestion = (authUser, qid, answer) => ({
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer,
})

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question,
})

//TODO: Optimistic update
export const handleSaveQuestion = (optionOneText, optionTwoText, author) => (
        dispatch
    ) =>
    _saveQuestion({ optionOneText, optionTwoText, author }).then(
        (question) => {
            dispatch(addQuestion(question));
            dispatch(addQuestionToUser(question));
        }
    );