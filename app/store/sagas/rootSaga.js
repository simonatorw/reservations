import { all } from 'redux-saga/effects';

import watchFetchAll from './fetchAll';
import watchFetchById from './fetchById';
import watchAddNew from './addNew';
import watchQuery from './query';

export default function* rootSaga() {
	yield all([
		watchFetchAll(),
		watchFetchById(),
		watchAddNew(),
		watchQuery()
	]);
}