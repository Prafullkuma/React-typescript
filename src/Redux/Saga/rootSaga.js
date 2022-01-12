import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  DELETE_POST_TYPE,
  POST_TYPE,
  EDIT_POST_TYPE,
  ADD_POST_TYPE,
} from "../Types/Post_type";

import axios from "axios";
import {
  addPostActionSuccess,
  deletePostActionFail,
  deletePostActionSuccess,
  editPostActionFail,
  editPostActionSuccess,
  setFailAction,
  setSuccessAction,
} from "../Actions/PostAction";

//API calls
function fetchPostRequest() {
  return axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
}

const fetchDeletePostRequest = async (id) => {
  return await axios({
    method: "DELETE",
    url: ` https://jsonplaceholder.typicode.com/posts/${id}`,
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  });
};
const fetcEditPostRequest = async (payload) => {
  return await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${payload?.id}`,
    payload,
    {
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    }
  );
};

const fetchAddPostRequest = async (payload) => {
  return await axios.post(
    `https://jsonplaceholder.typicode.com/posts/`,
    payload,
    {
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    }
  );
};

// Workers
export function* PostSagaWorker() {
  try {
    const response = yield call(fetchPostRequest);
    yield put(setSuccessAction(response.data));
  } catch (e) {
    yield put(setFailAction(e.message));
  }
}

export function* postDeleteSagaWorker({ payload }) {
  try {
    const response = yield call(fetchDeletePostRequest, payload);
    if (response?.status === 200) {
      yield put(deletePostActionSuccess(payload));
    }
  } catch (e) {
    yield put(deletePostActionFail(e.message));
  }
}

export function* postEditSagaWorker({ payload }) {
  try {
    const response = yield call(fetcEditPostRequest, payload);
    yield put(editPostActionSuccess(response.data));
  } catch (e) {
    yield put(editPostActionFail(e.message));
  }
}
export function* postAddSagaWorker({ payload }) {
  try {
    const response = yield call(fetchAddPostRequest, payload);
    yield put(addPostActionSuccess(response.data));
  } catch (e) {
    console.log(e.message);
  }
}

// saga watcher
export default function* rootSaga() {
  yield takeEvery(POST_TYPE.POST_LOADING, PostSagaWorker);
  yield takeLatest(DELETE_POST_TYPE.DELETE_POST_LOADING, postDeleteSagaWorker);
  yield takeEvery(EDIT_POST_TYPE.EDIT_POST_LOADING, postEditSagaWorker);
  yield takeEvery(ADD_POST_TYPE.ADD_POST_LOADING, postAddSagaWorker);
}
