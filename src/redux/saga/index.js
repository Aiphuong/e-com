import { put, takeEvery, all } from 'redux-saga/effects'
import {watchUserLogin} from './user'

export function* exampleSaga() { //generator function ()
    console.log("Example saga reached");
}

export function* exampleSaga2() { //generator function ()
    console.log("Example saga reached2");
}

export function* rootSaga() {
    yield all([
        exampleSaga(),
        exampleSaga2(),
        watchUserLogin(),
    ])
  }

