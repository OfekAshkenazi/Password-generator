export const SET_entity = 'SET_entity'
export const REMOVE_entity = 'REMOVE_entity'
export const ADD_entity = 'ADD_entity'
export const UPDATE_entity = 'UPDATE_entity'
export const SET_FILTER = 'SET_FILTER'

const initialState = {
    entitys: [],
    // filterBy: entityService.getDefaultFilter()
}

export function entityReducer(state = initialState, action) {
    let entitys
    switch (action.type) {
        case SET_entity:
            return { ...state, entitys: action.entitys }
        case REMOVE_entity:
            entitys = state.entitys.filter(entity => entity._id !== action.entityId)
            return { ...state, entitys }
        case ADD_entity:
            entitys = [action.entity, ...state.entitys]
            return { ...state, entitys }
        case UPDATE_entity:
            entitys = state.entitys.map(entity => entity._id === action.entity._id ? action.entity : entity)
            return { ...state, entitys }
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }
        default:
            return state
    }
}
