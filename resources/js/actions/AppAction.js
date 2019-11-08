import { APP_LOADING_STATE } from '../constants/Types';

export function loading(state = true) {
    return (dispatch) => dispatch({
        type: APP_LOADING_STATE,
        payload: {
            loading: state
        }
    });
}
