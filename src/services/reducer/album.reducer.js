import { ALBUMREQUEST, ALBUMSUCCESS, ALBUMREJECT } from "../const"

export const initialstate = {

    isLoading: false,
    albums: [],
    album: null,
    err: null

}

export const albumReducer = (state = initialstate, action) => {


    switch (action.type) {

        case "ALBUMREQUEST":

            return {
                ...state,
                isLoading: true
            }

        case "ALBUMSUCCESS":

            return {
                ...state,
                isLoading: false,
                albums: action.payload,
            }

        case "ALBUMREJECT":

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        default:

            return state;
    }
}