import React, { ReactNode, useContext, useId } from 'react'
import styled from 'styled-components'
import trash from './trash.svg'
import Button from '../../../styles/Button/Button'
import { TodosContext } from '../../../store/todo-list-context'

const Item = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: white;
	border-radius: 10px;
	padding: 20px;
	align-items: center;
	width: 400px;
	margin: 0 auto;
`
const Text = styled.label<{ done: boolean }>`
	font-weight: bold;
	${props => (props.done ? 'text-decoration: line-through;' : '')}
`
const DeleteBtn = styled.button`
	${Button};
	width: 40px;
	height: 40px;
`
const BtnPlaceholder = styled.div`
	width: 40px;
	height: 40px;
`

const TodoItem: React.FC<{
	isDone: boolean
	text: string
	id: string
}> = props => {
	const id = useId()
	const { removeTodo, switchIsDone } = useContext(TodosContext)

	return (
		<Item>
			<input
				type="checkbox"
				id={id + '-item'}
				onChange={() => switchIsDone(props.id)}
			/>
			<Text htmlFor={id + '-item'} done={props.isDone}>
				{props.text}
			</Text>
			{props.isDone ? (
				<DeleteBtn onClick={() => removeTodo(props.id)}>
					<img src={trash} alt="delete-btn" />
				</DeleteBtn>
			) : (
				<BtnPlaceholder />
			)}
		</Item>
	)
}

export default TodoItem
