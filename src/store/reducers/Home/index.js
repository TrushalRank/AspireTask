import { GET_TODO_LIST_FAILURE, GET_TODO_LIST_SUCCESS, GET_TODO_LIST_WATCHER } from "../../constant";

const initialState = {
	loader: false,
	error: null,
	todoListData: []
};

export default function homeReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TODO_LIST_WATCHER:
			return {
				...state,
				loader: true
			};
		case GET_TODO_LIST_SUCCESS:
			return {
				...state,
				error: null,
				todoListData: action.payload,
				loader: false
			};
		case GET_TODO_LIST_FAILURE:
			return {
				...state,
				error: action,
				loader: false
			};
		default:
			return state;
	}
}
