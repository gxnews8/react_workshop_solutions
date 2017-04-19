import React, { Component } from 'react';
import { validateName, validateEmail } from './validations';
import FormField from './FormField';

class ValidatedForm extends Component {
    state = {
        fields: { 
            name: '',
            email: ''
        },
        errors: { }
    }
    blockSubmit(){
        const {fields} = this.state;

        if (!fields.name || !fields.email ) { return true }

        const errorMsgs = Object.keys(this.state.errors).filter((key) => this.state.errors[key]);

        return (errorMsgs.length > 0);
    }
    handleChange = ({ name, value, error }) => {
        const fields = this.state.fields;
        const errors = this.state.errors;

        const newState = {
            fields: {
                ...fields,
                [name] : value
            },
            errors: {
                ...errors,
                [name]: error
            }
        }

        this.setState(newState);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ fields: { name: '', email: '' } })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <FormField 
                    name='name'
                    placeholder='Name'
                    validate={ validateName }
                    value={ this.state.fields.name }
                    onChange={ this.handleChange }
                />
                <FormField 
                    name='email'
                    placeholder='Email'
                    validate={ validateEmail }
                    value={ this.state.fields.email }
                    onChange={ this.handleChange }
                />

                <input type="submit" value="Submit" disabled={this.blockSubmit()}/>
            </form>
        )
    }
}

export default RegistrationForm;