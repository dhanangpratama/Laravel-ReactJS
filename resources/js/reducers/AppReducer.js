import { APP_LOADING_STATE } from '../constants/Types';

const initialState = {
    loading: false,
    user: null
}

export default function AppReducer(state = initialState, action) {
    switch (action.type) {

        case APP_LOADING_STATE: {
            return {
                ...state,
                loading: action.payload.loading
            }
        }

        default:
            return state;
    }
}
