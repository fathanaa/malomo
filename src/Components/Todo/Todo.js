import './Todo.css'
import TodoList from '../TodoList/TodoList.js'
import TodoForm from '../TodoCreate/TodoCreate.js'

const Todo = () => {
    
    const datatodos = [
        {id:1, title:'Eat'},
        {id:2, title:'Game'},
        {id:3, title:'Repeat'},
    ]

    const EventCreateTodo = (todo) => {
        datatodos.push(todo)
        console.log(datatodos)
    }

    return(
        <div className='TodoList'>
            <h2>Todo</h2>
            <TodoForm onCreateTodo={EventCreateTodo}/>
            <TodoList Datatodos={datatodos}/>
        </div>
    )
}

export default Todo