export const toDoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add To Do':
            return [
                ...initialState,
                action.payload
            ]

        case '[TODO] Remove To Do':
            return initialState.filter(todo => todo.id !== action.payload)

        case '[TODO] Toggle To Do':
            return initialState.map(todo => {
                if (todo.id === action.payload)
                return {
                    ...todo,
                    done: !todo.done
                }
                return todo
            })
        default:
            return initialState
    }
}