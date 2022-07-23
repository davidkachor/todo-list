import React, { createContext, ReactNode, useState } from 'react'

export const UiContext = createContext<{
	formIsOpen: boolean
	toggleForm: () => void
}>({
	formIsOpen: false,
	toggleForm: () => {},
})

const UiContextProvider: React.FC<{ children: ReactNode }> = props => {
	const [formIsOpen, setFormIsOpen] = useState(false)

	const toggleForm = () => {
		setFormIsOpen(prev => !prev)
	}

	return (
		<UiContext.Provider value={{ formIsOpen, toggleForm }}>
			{props.children}
		</UiContext.Provider>
	)
}

export default UiContextProvider
