import { INCREMENT, DECREMENT } from './types';


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

