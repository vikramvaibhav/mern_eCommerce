import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FALIURE,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FALIURE,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FALIURE,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FALIURE,
    USER_UPDATE_PROFILE_RESET
} from './userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FALIURE:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_REGISTER_FALIURE:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_DETAILS_FALIURE:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true }
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_UPDATE_PROFILE_FALIURE:
            return { loading: false, error: action.payload }
        case USER_UPDATE_PROFILE_RESET:
            return {}
        default:
            return state
    }
}