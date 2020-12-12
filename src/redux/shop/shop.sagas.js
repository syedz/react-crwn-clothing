import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection('collections');
        console.log('fetchCollectionsAsync');
        const snapshot = yield collectionRef.get();
        // Yield the next call in case it takes longer than expected
        // Yield will allow us to defer control back to the saga middleware, in case it needs to cancel, we have this option.
        // This also makes it easier to test
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

        // put() is the saga effect for the dispatching of the action
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }


    // Using Redux thunk from shop.actions.js
    // collectionRef
    //     .get()
    //     .then(snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         dispatch(fetchCollectionsSuccess(collectionsMap));
    //     })
    //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    // Used to be takeEvery(), but we only want it to be fired one time.
    // If takeLatest every did fire multiple times, we would get the latest data from the last call
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart),
    ]);
}