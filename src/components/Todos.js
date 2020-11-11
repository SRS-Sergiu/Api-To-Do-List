import React, { Component } from 'react';
import TodoItem from './TodosItem';
import PropTypes from 'prop-types'

class Todos extends Component{

    render(){
       // map - itereaza prin lista de props -- avem 4 props, se itereaza de 4 ori
       // accesam prin this.props.todos -- state-ul ce a fost trimis din compoenta App.js
       //fiecare iteratie trebuie sa aibe unique key,  camd se mapeaza, adica se foloseste methoda map() se creaaza o lista  si este nevoie de un identificator unic
        return this.props.todos.map((todo) =>(
        // se afiseaza de 4 ori ce avem in componenta TodoItem
        //pentru a accesa caracteristicile particulare a fiecarei props (todo)
          <TodoItem key={todo.id}  todo={todo}  markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ) );
    }
}

//propTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todos