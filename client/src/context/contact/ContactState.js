import React, { useReducer } from 'react';
// useReduce: to have acces to state & dispatch
import uuid from 'uuid';
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
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Ser Current Contact

    // Delete Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    // Return our provider :
    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
            >
            { props.children }
        </ContactContext.Provider>
    );
};

export default ContactState;