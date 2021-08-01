import React, { useReducer } from 'react';
// useReduce: to have acces to state & dispatch
import {v4 as uuid} from "uuid";
// uuid: to create random id
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts : [
            {
                id: 1,
                name: 'Jill Jhonson',
                email: 'jill@gmail.com',
                phone: '111-111-111',
                type: 'personal' 
            },
            {
                id: 2,
                name: 'Julio Carballo',
                email: 'jc@gmail.com',
                phone: '222-222-222',
                type: 'personal' 
            },
            {
                id: 3,
                name: 'Carlos Alvarado',
                email: 'ca@gmail.com',
                phone: '333-333-333',
                type: 'profesional' 
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
};

    // Delete Contact
const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
};

    // Set Current Contact
const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
};

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    // Filter Contacts
const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
};

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    // Return our provider :
    return (
        // Functions & states added here, so, we can used in our components
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact, 
                filterContacts,
                clearFilter
            }}
            >
            { props.children }
        </ContactContext.Provider>
    );
};

export default ContactState;