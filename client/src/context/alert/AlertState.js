import React, { useReducer } from 'react';
import nextId from "react-id-generator";
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = [

    ];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Set Alert
const setAlert = (msg, type, timeout = 5000) => {
    const id = nextId();
    dispatch({
        type: SET_ALERT,
        payload: { msg, type, id}
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
}




    // Return our provider :
    return (
        // Functions & states added here, so, we can used in our components
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert
        
            }}
            >
            { props.children }
        </AlertContext.Provider>
    );
};

export default AlertState;