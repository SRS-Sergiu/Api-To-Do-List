import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

state = {
    title: ''
}

onChange = (e) => this.setState( {
    title: e.target.value
} );
onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo( this.state.title) ;
    this.setState({ title: ''});
}

    render() {
        return (
            <div>
                <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                    <input 
                    type='text' 
                    name='title' 
                    style={{flex: '10', padding: '5px'}}
                    placeholder='add todo ...'
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                    <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: 1}}
                    />
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default AddTodo
