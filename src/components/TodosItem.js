import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class TodosItem extends Component {

    getStyle = () => {
      return {
        display: 'flex',
          padding: '10px',
          backgroundColor: '#f4f4f4',
          borderBottom: '1px dotted #ccc',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    }

    render() {

        const { id, title} = this.props.todo

        return (
            <div style={this.getStyle()}>
                {/* { ... } expresie */}
                <input  style={{marginRight: '5px'}} type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                <p style={{margin: '0'}}>{ title }</p>
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        )
    }
}

//propTypes
TodosItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    marginLeft: '25px'
}

// const itemStyle = {
//     backgroundColor: '#f9f9f9'
// }

export default TodosItem
