import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import axios from 'axios';
import { actions, FETCH_LIST } from '../actions';

const fetchData = data => axios(data).then(res => res.data);

function* fetchList() {
  try {
    const res = yield call(fetchData, {
      url: 'https://api.github.com/users',
    });
    if (res.length) {
      yield put(actions.fetchListSuccess(res));
    } else {
      throw new Error('貌似出错了...');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(FETCH_LIST, fetchList),
  ];
}
