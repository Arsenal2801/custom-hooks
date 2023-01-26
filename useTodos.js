
import { useEffect, useReducer, useState  } from "react";

import { toDoReducer } from '../08-useReducer/todoReducer'

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

     const [todos, dispatch] = useReducer(toDoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewToDo = (todo) => {
        const action = {
            type: '[TODO] Add To Do',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteToDo = (id) => {
        dispatch({
            type: '[TODO] Remove To Do',
            payload: id
        })
    }
    const handleToggleToDo = (id) => {
        dispatch({
            type: '[TODO] Toggle To Do',
            payload: id
        })
    }

    const todosCounter = todos.length

    const pendingTodos = todos.filter(todo => !todo.done).length


  return ({
    todos,
    handleNewToDo,
    handleDeleteToDo,
    handleToggleToDo,
    todosCounter,
    pendingTodos

  })
}
