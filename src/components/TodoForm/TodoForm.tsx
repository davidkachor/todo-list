import React, { useContext, useId, useState } from 'react'
import styled from 'styled-components'
import { TodosContext } from '../../store/todo-list-context'
import Button from '../../styles/Button/Button'
import { UiContext } from '../../store/ui-context'

const Wrapper = styled.div`
	position: relative;
`
const OpenForm = styled.button`
	${Button};
	width: 200px;
	height: 50px;
	background-color: purple;
	color: white;
	position: absolute;
	top: -25px;
	left: calc(50% - 100px);
`
const Form = styled.form`
	padding: 40px 0 20px;
	display: flex;
	flex-direction: column;
`
const FormControl = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	margin: 0 auto;
`
const AddBtn = styled.button.attrs({
	type: 'submit',
})`
	width: 200px;
	border: solid 1px grey;
	margin: 10px auto 0;
`

const TodoForm: React.FC = () => {
	const id = useId()
	const { addTodo } = useContext(TodosContext)
	const { formIsOpen, toggleForm } = useContext(UiContext)
	const [value, setValue] = useState('')

	const submitHandler: React.FormEventHandler = event => {
		event.preventDefault()
		addTodo(value.trim())
		setValue('')
	}

	return (
		<Wrapper>
			<OpenForm onClick={() => toggleForm()}>
				{!formIsOpen ? '+ New Task' : 'Close Form'}
			</OpenForm>
			{formIsOpen && (
				<Form onSubmit={submitHandler}>
					<FormControl>
						<label htmlFor={id + '-todo-text'}>Todo description</label>
						<input
							type="text"
							id={id + '-todo-text'}
							value={value}
							onChange={event => setValue(event.target.value)}
						/>
					</FormControl>
					<AddBtn>Add</AddBtn>
				</Form>
			)}
		</Wrapper>
	)
}

export default TodoForm
