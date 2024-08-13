import { INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './types';
import axios from 'axios';


export const increaseCounter = () => {

    return {

        type: INCREMENT, // name
        payload: {like: 'Buy milk', name: 'Quang Huy'}
    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};

// Fetch trên data có 3 trạng thái
// - 1. Fetching data
// - 2. doing (Trạng thái API đang lấy dữ liệu)
// - 3. finish 
export const fetchAllUsers = () => {

    return async (dispatch, getState) => {
        // Lấy data
        dispatch(fetchUsersRequest());
        try {
            const res = await axios.get("http://localhost:8080/users/all");
            const data = res && res.data ? res.data : [];
            dispatch(fetchUsersSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchUsersError());
        }
        
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data
    }
}
export const fetchUsersError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}

