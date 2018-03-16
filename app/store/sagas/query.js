import { call, put, takeEvery } from 'redux-saga/effects';

import actionTypes from '../actions/actionTypes';
import { queryResvSucceeded, queryResvFailed } from '../actions/actionCreators';
import { fetchGet } from '../../api/async';
import { dataUrls } from '../../constants';
import { queryStringify } from '../../api/async';

export function* query(action) {
	try {
		const data = yield call(fetchGet, dataUrls.QUERY + queryStringify(action.data));

		yield put(queryResvSucceeded(data));
	} catch (err) {
		console.log(err);
		yield put(queryResvFailed(err));
	}
}

export default function* watchQuery() {
	yield takeEvery(actionTypes.query.QUERY_RESV, query);
}
