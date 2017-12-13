import React, { Component } from 'react';
import ContactCard from './contact_card';
import ContactData from '../data/contact';

class ContactList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: ContactData
        }

    }

    render() {
        const list = this.state.contacts.map((item, index)=>{return <ContactCard key={index} contact={item}/>});
        return (
            <div className="col-8">
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }
}

export default ContactList;