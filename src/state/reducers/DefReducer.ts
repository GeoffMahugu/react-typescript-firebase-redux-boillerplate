import logging from "../../config/logging";
import { ActionType, InitialState } from "../action-types";
import { DefaultActions } from "../actions/DefaultActions";


const initState: InitialState = {
    id: '1'
}

const reducer = (state: InitialState = initState, action: DefaultActions) => {

    switch (action.type) {
        case ActionType.FETCH_ACTION_TYPE:
            logging.info('FETCH_ACTION_TYPE')
            return state;
        default:
            return state;
    }
}

export default reducer;