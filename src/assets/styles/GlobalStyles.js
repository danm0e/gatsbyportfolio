import styled, { createGlobalStyle } from 'styled-components'
import { ResetCSS } from '@assets/styles/ResetCSS'
import { Typography } from '@assets/styles/Typography'
import { palette } from '@assets/styles/Colors'

const GlobalStyles = createGlobalStyle`
	${ResetCSS}
	
	html, body {
		font-family: 'Open Sans', sans-serif;
		color: ${palette.white};
		background-color: ${palette.secondary};
	}

	${Typography}

	a {
		color: ${palette.primary};
		text-decoration: none;
		transition: color 0.3s ease-in-out;

		&:hover {
			color: ${palette.tertiary};
		}
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 960px;
	min-height: 600px;
	padding: 1rem 1.5rem;
`

export default GlobalStyles
export { Container }