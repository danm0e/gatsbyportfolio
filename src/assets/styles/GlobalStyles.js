import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	body {
		font-family: 'Open Sans', sans-serif;
	}
`

const Container = styled.div`
	max-width: 960px;
	margin: 0 auto;
`

export default GlobalStyles
export { Container }