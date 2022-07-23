import React, { useContext } from 'react'
import styled from 'styled-components'
import { TodosContext } from '../../store/todo-list-context'
import TodoItem from './TodoItem/TodoItem'

const Main = styled.main`
	display: flex;
	flex-direction: column;
	gap: 5px;
	background-color: #ffe5ff;
	padding: 10px 0 40px;
`

const TodoList: React.FC = () => {
	const { todoItems } = useContext(TodosContext)

	return (
		<Main>
			{todoItems.map(e => (
				<TodoItem isDone={e.isDone} text={e.text} key={e.id} id={e.id} />
			))}
		</Main>
	)
}

export default TodoList
