import actionTypes from '../actions/actionTypes';
import stateTree from '../stateTree';

export default function dataReducer(state = stateTree, action) {

    switch(action.type) {
		case actionTypes.query.QUERY_RESV_SUCCEEDED:
	    case actionTypes.all.GET_RESV_SUCCEEDED:
			return { ...state, reservations: action.data };
		case actionTypes.byId.GET_RESV_BY_ID_SUCCEEDED:
			return { ...state, details: action.data };
        default:
            return state;
    }
}