import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

function Form() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([
        { todo: 'faire à manger', id: uuidv4() },
        {todo: 'apprendre l\'anglais', id:  uuidv4() }
    ]);

    const addTodo = (e) => {
        setTodos([...todos, { todo: todo, id:  uuidv4()}]);
        setTodo('');
        e.preventDefault();
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos);
    }
    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form className="form-group" onSubmit={addTodo}>
                <label htmlFor="todo" className="label-group">
                    Tâche à faire 
                </label>
                <input type="text" name="todo" className="form-control" value={todo} onInput={e => setTodo(e.target.value)} />
                {todo !== '' && <button className="btn btn-success mt-3">Ajouter</button>}
            </form>
            <h3 className="text-weight-bold mt-2">Listes des tâche à faire :</h3>
            <ul className="list-group">
                {todos.map(item => {
                    return (
                        <Item item={item.todo} key={item.id} id={item.id} funDel={deleteTodo} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Form;