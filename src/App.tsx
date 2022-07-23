import React from 'react'
import UiContextProvider from './store/ui-context'
import TodosContextProvider from './store/todo-list-context'
import Header from './components/Header/Header'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

function App() {
	return (
		<>
			<Header />
			<TodosContextProvider>
				<TodoList />
				<UiContextProvider>
					<TodoForm />
				</UiContextProvider>
			</TodosContextProvider>
		</>
	)
}

export default App
