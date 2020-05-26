import styled, { createGlobalStyle } from 'styled-components'
import { ResetCSS } from './ResetCSS'

const GlobalStyles = createGlobalStyle`
	${ResetCSS}

	html, body {
		font-family: 'Open Sans', sans-serif;
	}
`

const Container = styled.div`
	margin: 0 auto;
	max-width: 960px;
`

export default GlobalStyles
export { Container }