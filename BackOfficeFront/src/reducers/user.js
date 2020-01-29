import * as UserActions from '../actions/user'

const initialState = {
    login: [],
    data: [],
    isLoading: false,
    errorMessage: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {

        case UserActions.SET_LOGIN:
            return { ...state, login: [], isLoading: true, errorMessage: undefined }

        case UserActions.SET_LOGIN_SUCCESS:
            return { ...state, login: action.payload, isLoading: false, errorMessage: undefined };

        case UserActions.SET_LOGIN_FAILED:
            return { ...state, login: [], isLoading: false, errorMessage: action.payload.message ? JSON.parse(action.payload.message).Message : 'Falha ao efetuar Login!' };

        case UserActions.POST_USER:
            return { ...state, data: [], isLoading: true, errorMessage: undefined }

        case UserActions.POST_USER_SUCCESS:
            return { ...state, data: action.payload, isLoading: false, errorMessage: undefined };

        case UserActions.POST_USER_FAILED:
            return { ...state, data: [], isLoading: false, errorMessage: action.payload.message ? JSON.parse(action.payload.message).Message : 'Falha ao cadastrar usuário!' };

        default:
            return { ...state }
    }
}
