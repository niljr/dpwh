// @flow
const UPDATE_SEARCH = 'UPDATE_SEARCH';
const SET_CURRENT_CONTRACT = 'SET_CURRENT_CONTRACT';

export function updateSearch(search: Object): any {
    return {
        type: UPDATE_SEARCH,
        search
    };
}

export function setCurrentContract(value: Object): any {
    return {
        type: SET_CURRENT_CONTRACT,
        value
    };
}

const initialState = {
    searchIdType: '',
    searchId: '',
    currentContract: null
};

export default function contract(state: Object = initialState, action: Object): any {
    switch (action.type) {
        case UPDATE_SEARCH:
            return {
                ...state,
                ...action.search
            };
        case SET_CURRENT_CONTRACT:
            return {
                ...state,
                currentContract: action.value
            };
        default:
            return state;
    }
}
