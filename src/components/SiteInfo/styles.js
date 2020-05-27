import styled from 'styled-components'
import { Link } from "gatsby"
import { palette } from '@assets/styles/Colors'

export const Wrapper = styled.div`
	flex-grow: 1;
`

export const Title = styled(Link)`
	color: ${palette.white};
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	text-decoration: none;
	display: inline-block;
	transition: color 0.3s ease-in-out;

	&:hover {
		color: ${palette.tertiary};
	}
`

export const Tagline = styled.div`
	color: ${palette.primary};
	font-size: 0.6rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
`
