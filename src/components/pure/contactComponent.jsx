import React, {useState}from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

    var [connected, setConnected] = useState(contact.connected);

    const changeState = () => {
        //Actualiza el State
        setConnected(connected = !connected)
    }

    return (
        <div>
            <h1>Name: {contact.name}</h1>
            <h2>LastName: {contact.lastName}</h2>
            <h3>Email: {contact.email}</h3>
            <div>
                <h4>Conected: {connected ? 'Conect': 'Disconect'}</h4>
                <button onClick={changeState}> {connected ? 'Disconect':'Connect'} </button>
            </div>
            
        </div>
    );
    
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
