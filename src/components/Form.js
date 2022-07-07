import { useState } from "react";
import Item from "./Item";

function Form() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([
        { todo: 'faire à manger', id: Date.now },
        {todo: 'apprendre l\'anglais', id:  Date.now }
    ]);
    const addTodo = (e) => {
        setTodos([...todos, { todo: todo, id:  Date.now }]);
        setTodo('');
        e.preventDefault();
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
            <h3 className="text-weight-bold mt-2">Listes des tâche à faire</h3>
            <ul className="list-group">
                {todos.map((item, index) => {
                    return (
                        <Item item={item.todo} key={index} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Form;