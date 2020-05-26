import styled, { createGlobalStyle } from 'styled-components'
import { ResetCSS } from './ResetCSS'

const GlobalStyles = createGlobalStyle`
	${ResetCSS}

	html, body {
		font-family: 'Open Sans', sans-serif;
	}
`

const Container = styled.div`
	max-width: 960px;
	margin: 0 auto;
`

export default GlobalStyles
export { Container }