import { takeLatest,takeEvery, call, put, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./taskLocalStorage";
import { fetchExampleTasks,fetchLoadingStateSucces, selectTasks,} from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(500)
        const exampleTasks = yield call(getExampleTasks)
        yield put(fetchLoadingStateSucces(exampleTasks))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!")
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}