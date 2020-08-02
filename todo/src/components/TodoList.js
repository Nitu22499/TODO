import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit} =this.props

        return (
            <div className="card card-body my-3">
            <ul className="List-group my-5">
                <h2 className="text-center">TO-DO LIST</h2>
                {
                    items.map(var_item => {
                        return(
                        <TodoItem 
                            key={var_item.id} 
                            title={var_item.title} 
                            handleDelete={()=>handleDelete(var_item.id)}
                            handleEdit={()=>handleEdit(var_item.id)}
                        />
                        );
                    })
                }
                
                <button className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>clear list</button>
            </ul>
            </div>
            
        );
    }
}
