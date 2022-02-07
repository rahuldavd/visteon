import {
    EDIT_LIST,
    DELETE_LIST,
    ADD_LIST,
    TO_EDIT_LIST
  } from '../constants/ActionTypes';

const initialState = [];

export default function listAction(state = initialState, action) {
    switch (action.type) {
        case TO_EDIT_LIST:
            return [
                ...action.payload
            ]
        case EDIT_LIST:
            return [
                action.payload
            ]
        case DELETE_LIST:
            return state.filter(todo =>
                todo.id !== action.id
            )
        case ADD_LIST:
            return state.map(todo =>
                todo.id === action.id ?
                { ...todo, text: action.text } :
                todo
            )
        default:
            return state
    }
}