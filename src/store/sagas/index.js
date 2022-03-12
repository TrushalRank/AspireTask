import { all } from "redux-saga/effects";

import { userInstallsActionWatcher } from "./Home";

export default function* root() {
	yield all([userInstallsActionWatcher()]);
}
