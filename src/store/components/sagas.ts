import {
  all,
  call,
  cancel,
  fork,
  take,
} from 'redux-saga/effects';

export default function* staticSagas() {
  while (true) {
    const allTasks = yield all([
      // fork(authWatcher),
    ]);

    // Cancel all tasks on logout
    // yield take(USER_LOGOUT);
    // yield call(userLogoutSaga);
    // yield cancel(allTasks);
  }
}
