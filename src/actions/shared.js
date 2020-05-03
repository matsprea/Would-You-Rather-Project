import { _getUsers, _getQuestions } from '../utils/_DATA';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';

export const handleInitialData = () => (dispatch) => Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
    }
)