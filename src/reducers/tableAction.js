import {
    EDIT_LIST,
    DELETE_LIST,
    ADD_LIST
  } from '../constants/ActionTypes';

const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
]

export default function listAction(state = initialState, action) {
    switch (action.type) {
        case EDIT_LIST:
        return [
            ...state,
            {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
            }
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