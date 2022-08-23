import React from 'react';
import ContactComponent from '../pure/contactComponent';
import { Contact } from '../../models/contact.class';


const ContactListComponent = () => {

    const contactExample = new Contact("Pepito","Perez", "PepitoP@mail.com", true);

    return (
        <div>
            <h1>Your Contact:</h1>
            <ContactComponent contact={contactExample}></ContactComponent>
        </div>
    );
};



export default ContactListComponent;
