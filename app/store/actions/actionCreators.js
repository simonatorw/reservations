import actionTypes from './actionTypes';

export const getAllResv = () => ({
	type: actionTypes.all.GET_RESV
});

export const getAllResvSucceeded = (data) => ({
	type: actionTypes.all.GET_RESV_SUCCEEDED,
	data
});

export const getAllResvFailed = (err) => ({
	type: actionTypes.all.GET_RESV_FAILED,
	err
});

export const getResvById = (id) => ({
	type: actionTypes.byId.GET_RESV_BY_ID,
	id
});

export const getResvByIdSucceeded = (data) => ({
	type: actionTypes.byId.GET_RESV_BY_ID_SUCCEEDED,
	data
});

export const getResvByIdFailed = (err) => ({
	type: actionTypes.byId.GET_RESV_BY_ID_FAILED,
	err
});

export const addResv = (data) => ({
	type: actionTypes.add.ADD_RESV,
	data
});

export const addResvSucceeded = (data) => ({
	type: actionTypes.add.ADD_RESV_SUCCEEDED,
	data
});

export const addResvFailed = (err) => ({
	type: actionTypes.add.ADD_RESV_FAILED,
	err
});

export const resetAdd = (data) => ({
	type: actionTypes.RESET_FORM,
	data
});

export const queryResv = (data) => ({
	type: actionTypes.query.QUERY_RESV,
	data
});

export const queryResvSucceeded = (data) => ({
	type: actionTypes.query.QUERY_RESV_SUCCEEDED,
	data
});

export const queryResvFailed = (err) => ({
	type: actionTypes.query.QUERY_RESV_FAILED,
	err
});