import actionTypes from '../actions/actionTypes';
import stateTree from '../stateTree';

export default function appReducer(state = stateTree, action) {
    switch(action.type) {
		case actionTypes.add.ADD_RESV_SUCCEEDED:
			return { ...state, addStatus: action.data };				
		case actionTypes.RESET_FORM:
			return { ...state, addStatus: action.data };
        default:
            return state;
    }
}