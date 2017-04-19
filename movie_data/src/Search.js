import React, { Component } from 'react';

class Search extends Component {
    state = {
        value: ''
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    } 
    handleClick = (event) => {
        this.props.onClick(this.state.value)
            .then(() => {
                this.setState({
                    value: ''
                });
            })
    } 
    render(){
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                />
                <input 
                    type="submit" 
                    value="Search" 
                    onClick={this.handleClick}
                    />
            </div>
        )
    }
}

export default Search;