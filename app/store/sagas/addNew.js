import { call, put, takeEvery } from 'redux-saga/effects';

import actionTypes from '../actions/actionTypes';
import { addResvSucceeded, addResvFailed } from '../actions/actionCreators';
import { fetchPost } from '../../api/async';
import { dataUrls } from '../../constants';

export function* addNew(action) {
	try {
		const data = yield call(fetchPost, dataUrls.ADD_NEW, action.data);

		yield put(addResvSucceeded(data.id));
	} catch (err) {
		console.log(err);
		yield put(addResvFailed(err));
	}
}

export default function* watchAddNew() {
	yield takeEvery(actionTypes.add.ADD_RESV, addNew);
}
