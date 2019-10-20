import * as types from './actionTypes';

const initialLoginForm = {
    username: '',
    password: ''
}

const initialColors = []

const initialColorForm = {
    color: '',
    hex: ''
}

export const colorsReducer = (state = initialColors, action) => {
    switch (action.type) {
        case types.ADD_COLORS:
            return action.payload
        default:
            return state;
    }
}

export const loginFormReducer = (state = initialLoginForm, action) => {
    switch (action.type) {
        case types.ON_LOGIN_FORM_CHANGE:
            return {
                ...state, [action.payload.key]: action.payload.value
            }
        case types.ON_SUBMIT:
            return initialLoginForm
        default:
            return state
    }
}

export const colorFormReducer = (state = initialColorForm, action) => {
    switch (action.type) {
        case types.ON_COLOR_FORM_CHANGE:
            return {
                ...state, [action.payload.key]: action.payload.value
            }
        case types.ON_SUBMIT:
            return initialColorForm;
        default:
            return state;
    }
}