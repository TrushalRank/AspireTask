import { takeLatest, put } from "redux-saga/effects";

import { GET_TODO_LIST_WATCHER } from "../../constant";

import { getTodoListError, getTodoListSuccess } from "../../actions";

import { API_URL, BASE_URL } from "../../services";

function* onGetTodoList(todoAction) {
	let { resolve, reject } = todoAction;
	try {
		const header = { "Content-Type": "application/json" };
		const response = yield fetch(BASE_URL + API_URL.GET_TODO_LIST, {
			method: "GET",
			headers: header,
			body: ""
		}).then(res => resolve(res.json()));
		yield put(getTodoListSuccess(response));
	} catch (e) {
		yield put(getTodoListError(e));
		reject(e);
	}
}

export function* userInstallsActionWatcher() {
	yield takeLatest(GET_TODO_LIST_WATCHER, onGetTodoList);
}
