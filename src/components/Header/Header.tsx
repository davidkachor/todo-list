import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
	background-color: purple;
	color: white;
	padding: 10px 30px;
`
const Title = styled.h1`
	text-align: center;
`

const Header = () => {
	return (
		<HeaderStyled>
			<Title>Todo website</Title>
		</HeaderStyled>
	)
}

export default Header
