import { call, put, takeEvery } from 'redux-saga/effects';

import actionTypes from '../actions/actionTypes';
import { getResvByIdSucceeded, getResvByIdFailed } from '../actions/actionCreators';
import { fetchGet } from '../../api/async';
import { dataUrls } from '../../constants';

export function* fetchById(action) {
	try {
		const data = yield call(fetchGet, dataUrls.BY_ID + action.id);

		yield put(getResvByIdSucceeded(data));
	} catch (err) {
		console.log(err);
		yield put(getResvByIdFailed(err));
	}
}

export default function* watchFetchById() {
	yield takeEvery(actionTypes.byId.GET_RESV_BY_ID, fetchById);
}
