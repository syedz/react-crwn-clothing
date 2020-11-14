import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { googleSignInFailure, googleSignInSuccess } from './user.actions';

export function* signInWithGoogle() {
    try {
        // Want to access value that gets returned with the success
        const { user } = yield auth.signInWithPopup(googleProvider);
        // Used to be in App.js in componentDidMount()
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();

        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(googleSignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)]);
} 