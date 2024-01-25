import axios from "axios"
import { ALBUMREQUEST, ALBUMSUCCESS, ALBUMREJECT } from "../const"

export const albumRequest = () => {

    return {
        type: "ALBUMREQUEST"
    }

}

export const albumSuccesss = (data) => {

    return {
        type: "ALBUMSUCCESS",
        payload: data
    }

}

export const albumReject = (err) => {

    return {
        type: "ALBUMREJECT",
        payload: err
    }
}

export const album = () => {

    return dispatch => {

        dispatch(albumRequest());

        axios.get('https://jsonplaceholder.typicode.com/albums').then((data) => {
            dispatch(albumSuccesss(data.data));
        }).catch((err) => dispatch(err.message));
    }
}