import React, { createContext, ReactNode, useEffect, useReducer } from 'react'
import Todo from '../models/todo'

export const TodosContext = createContext<{
	todoItems: Todo[]
	addTodo: (text: string) => void
	removeTodo: (id: string) => void
	switchIsDone: (id: string) => void
}>({
	todoItems: [],
	addTodo: (text: string) => {},
	removeTodo: (id: string) => {},
	switchIsDone: (id: string) => {},
})

type Action =
	| { type: 'ADD_TODO'; text: string }
	| { type: 'REMOVE_TODO'; id: string }
	| { type: 'SWITCH_IS_DONE'; id: string }
	| { type: 'SET_ITEMS'; items: Todo[] }

const todoReducer: React.Reducer<Todo[], Action> = (state, action) => {
	switch (action.type) {
		default:
			return state
		case 'ADD_TODO':
			const addState = [...state, new Todo(action.text)]
			localStorage.setItem('TODO_ITEMS', JSON.stringify(addState))
			return addState
		case 'REMOVE_TODO':
			const removeState = state.filter(e => e.id !== action.id)
			localStorage.setItem('TODO_ITEMS', JSON.stringify(removeState))
			return removeState
		case 'SWITCH_IS_DONE':
			const items = [...state]
			const obj = items.find(e => e.id === action.id)
			if (obj) {
				obj.isDone = !obj.isDone
				localStorage.setItem('TODO_ITEMS', JSON.stringify(items))
				return items
			} else return state
		case 'SET_ITEMS':
			return action.items
	}
}

const TodosContextProvider: React.FC<{ children: ReactNode }> = props => {
	const [todoItems, dispatch] = useReducer(todoReducer, [])

	useEffect(() => {
		const storage = localStorage.getItem('TODO_ITEMS')
		if (!!storage) {
			dispatch({ type: 'SET_ITEMS', items: JSON.parse(storage) })
		}
	}, [])

	const addTodo = (text: string) => {
		dispatch({ type: 'ADD_TODO', text })
	}
	const removeTodo = (id: string) => {
		dispatch({ type: 'REMOVE_TODO', id })
	}
	const switchIsDone = (id: string) => {
		dispatch({ type: 'SWITCH_IS_DONE', id })
	}
	return (
		<TodosContext.Provider
			value={{ todoItems, addTodo, removeTodo, switchIsDone }}
		>
			{props.children}
		</TodosContext.Provider>
	)
}

export default TodosContextProvider
