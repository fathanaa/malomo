import './TodoList.css'

const TodoList = (Thedatatodos) => {
    return(
        <div className='TodoList'>
            <ul>
                {
                    Thedatatodos.Datatodos.map((todo) => {
                        return <li key={todo.id}>{todo.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList