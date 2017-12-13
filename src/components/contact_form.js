import React, {Component} from 'react';

class ContactForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        event.preventDefault();
        console.log(this.state.form);
    }

    render(){
        const {firstName, lastName} = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input name="firstName" value={firstName} type="text" className="form-control" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input name="lastName" value={lastName} type="text" className="form-control" onChange={this.handleInputChange}/>
                </div>
                <button>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;