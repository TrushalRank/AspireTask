import { GET_TODO_LIST_FAILURE, GET_TODO_LIST_SUCCESS, GET_TODO_LIST_WATCHER } from "../../constant";

export function getTodoListWatcher(payload, resolve, reject) {
	return { type: GET_TODO_LIST_WATCHER, payload, resolve, reject };
}

export function getTodoListSuccess(payload) {
	return { type: GET_TODO_LIST_SUCCESS, payload: payload };
}

export function getTodoListError(error) {
	return { type: GET_TODO_LIST_FAILURE, payload: error };
}