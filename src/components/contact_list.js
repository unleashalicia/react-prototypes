import React from 'react';
import ContactCard from './contact_card';


const ContactList = props => {
    const list = props.contacts.map((item, index)=>{return <ContactCard key={index} contact={item}/>});
    console.log(list);
    return (
        <div className="col-8">
            <div className="row">
                {list}
            </div>
        </div>
    );
}


export default ContactList;