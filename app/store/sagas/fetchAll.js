import { call, put, takeEvery } from 'redux-saga/effects';

import actionTypes from '../actions/actionTypes';
import { getAllResvSucceeded, getAllResvFailed } from '../actions/actionCreators';
import { fetchGet } from '../../api/async';
import { dataUrls } from '../../constants';

export function* fetchAll(action) {
	try {
		const data = yield call(fetchGet, dataUrls.ALL);

		yield put(getAllResvSucceeded(data));
	} catch (err) {
		console.log(err);
		yield put(getAllResvFailed(err));
	}
}

export default function* watchFetchAll() {
	yield takeEvery(actionTypes.all.GET_RESV, fetchAll);
}
