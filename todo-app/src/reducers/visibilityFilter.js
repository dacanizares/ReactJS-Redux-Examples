// Action Types
export const VisibilityFilterActionTypes = {
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

// Reducer
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case VisibilityFilterActionTypes.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter;