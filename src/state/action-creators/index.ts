import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { DefaultActions } from "../actions/DefaultActions";
import { InitialState } from '../action-types'

export const stateFetchDefaultAction = (item: InitialState) => {
    return (dispatch: Dispatch<DefaultActions>) => {
        dispatch({
            type: ActionType.FETCH_ACTION_TYPE,
            payload: item
        })
    }
}