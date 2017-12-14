import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleInputChange(event){
        const {value, name} = event.target;
        const {form} = this.state;
        form[name] = value;
        this.setState({
            form: {...form}
        });
    }

    handleSubmit(event){
        debugger;
        event.preventDefault();
        console.log(this.state.form);
        this.props.add(this.state.form);
        this.reset();
    }

    reset(){
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        });
    }

    render(){
        const {firstName, lastName, phone, email} = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone" type="text" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="text" value={email} onChange={this.handleInputChange}/>
                <div>
                    <button className="btn btn-success btn-sm mr-4">Add Contact</button>
                    <button className="btn btn-danger btn-sm" type="button" onClick={this.reset}>Clear From</button>
                </div>
            </form>
        )
    }
}

export default ContactForm;