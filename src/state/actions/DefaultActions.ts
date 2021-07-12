import { ActionType, InitialState } from "../action-types";

interface FetchDefaultAction {
    type: ActionType.FETCH_ACTION_TYPE,
    payload: InitialState
}
export type DefaultActions = FetchDefaultAction
    // | AddItemToCartAction
