import { takeEvery } from "redux-saga/effects";
import { fetchUrl, API } from "../util";
import * as PlansActions from '../actions/plans'
import * as UserActions from '../actions/user'

function* getPlans() {
  yield fetchUrl(`${API}Planos`, PlansActions.GET_PLANS_SUCCESS, PlansActions.GET_PLANS_FAILED);
}

export function* watchGetPlans() {
  yield takeEvery(PlansActions.GET_PLANS, getPlans);
}

function* getUserPlan(action) {
  debugger
  yield fetchUrl(`${API}Planos/${action.payload.id}`, UserActions.GET_USER_PLANS_SUCCESS, UserActions.GET_USER_PLANS_FAILED);
}

export function* watchGetUserPlan() {
  yield takeEvery(UserActions.SET_LOGIN_SUCCESS, getUserPlan);
}