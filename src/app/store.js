import { createStore } from 'redux';

const initialState = {
    dataUsers: [],
    loader: true
}

const reducerDataTable = (state = initialState,action) => {
    console.log(action);
    switch (action.type) {
        case "SET_DATA_USERS":
            return {
                ...state,
                dataUsers: action.data         
            }
        
        case "SET_LOADER":
            return {
                ...state,
                loader: action.stateLoader
            }
    }

    return state;
}

export default createStore(reducerDataTable);