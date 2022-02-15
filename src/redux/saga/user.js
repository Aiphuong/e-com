import { put, takeEvery, call } from 'redux-saga/effects'
import { login } from '../../core/services/user'

function* workerUserLogin(data) {
  const { payload: { info } } = data;

  try {
    const { data: { data } } = yield call(login, info)

    yield put({ type: 'GET_TOKEN', payload: { info: data } })
  } catch (error) {

  }
}

export function* watchUserLogin() {
  yield takeEvery('SET_USER_INFO', workerUserLogin)
}