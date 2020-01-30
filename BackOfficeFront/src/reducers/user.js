import * as UserActions from '../actions/user'

const initialState = {
    login: [],
    data: [],
    isValid: true,
    indicacaoId: undefined,
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

        case UserActions.GET_USER_VALID:
            return { ...state, isValid: false, indicacaoId: undefined, isLoading: true, errorMessage: undefined };

        case UserActions.GET_USER_VALID_SUCCESS:
            return { ...state, indicacaoId: action.payload, isValid: true, isLoading: false, errorMessage: undefined };

        case UserActions.GET_USER_VALID_FAILED:
            debugger
            return { ...state, isValid: false, indicacaoId: undefined, isLoading: false, errorMessage: treatErrorMessage(action.payload.message) };

        default:
            return { ...state }
    }
}

export function treatErrorMessage(message) {
    if (message.includes('Failed to fetch')) {
        return 'Falha na requisição. Contate o suporte.'
    } else {
        return JSON.parse(message).Message
    }



}