// @flow

const initialState = {
    currentContract: {
        id: '15CH6730',
        contractor: 'AQUASSEUR',
        contractName: 'Consequat enim ut mollit culpa consequat magna consectetur do fugiat nisi excepteur elit enim veniam.',
        description: 'Irure eu duis eu eu in duis sunt. Labore aliquip reprehenderit culpa mollit velit.',
        effectivityDate: '04/10/2015',
        expiryDate: '11/14/2017',
        status: 'ongoing',
        accomplishment: 35,
        duration: 45,
        cost: '489,997.70'
    }
};

export default function contract(state: Object = initialState, action: Object): any {
    switch (action.type) {
        // case SET_NOTIFICATION:
        //     return {
        //         ...state,
        //         ...action
        //     };
        // case CLEAR_FLASH_MESSAGE:
        //     return {
        //         ...state,
        //         message: ''
        //     };
        default:
            return state;
    }
}
