import React from "react";

import { TodoContext } from "../TodoContext/TodoContext";

import './TodoForm.css';


function TodoForm() {
    const {
        setOpenModal,
        createNewTodo
    } = React.useContext(TodoContext);

    const [newTodo, setNewTodo] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        createNewTodo(newTodo);
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    
    const onChange = (event) => {
        setNewTodo(event.target.value);
    }

    return(
        <form onSubmit={onSubmit} className="todo-form">
            <label className="todo-form__title">Crea un TODO!</label>

            <textarea onChange={(event) => onChange(event)} className="todo-form__content" placeholder="Aprender REACT!!!"/>

            <section className="todo-form__buttons">
                <button onClick={() => onCancel()} type="button" className="buttons todo-form__cancel">Cancelar</button>
                <button type="submit" className="buttons todo-form__create">Crear</button>
            </section>
        </form>
    )
}

export {
    TodoForm
}