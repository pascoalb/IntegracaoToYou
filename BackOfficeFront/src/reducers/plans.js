import * as UserActions from '../actions/user'
import * as PlansActions from '../actions/plans'

const initialState = {
  userPlan: undefined,
  plans: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case PlansActions.GET_PLANS:
    case UserActions.GET_USER_PLANS:
      return { ...state, isLoading: true }

    case PlansActions.GET_PLANS_SUCCESS:
      return { ...state, plans: action.payload, isLoading: false }

    case PlansActions.GET_PLANS_FAILED:
      return { ...state, plans: [], isLoading: false }

    case UserActions.GET_USER_PLANS_SUCCESS:
      return { ...state, userPlan: action.payload, isLoading: false }

    case UserActions.GET_USER_PLANS_FAILED:
      return { ...state, userPlan: undefined, isLoading: false }

    default:
      return { ...state }
  }
}