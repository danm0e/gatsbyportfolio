import styled from 'styled-components'
import { Link } from "gatsby"
import { palette } from '@assets/styles/Colors'

export const Wrapper = styled.div`
	background-color: ${palette.secondary};
	display: flex;
	padding: 1rem 1.5rem;
`

export const MenuItem = styled(Link)`
	align-items: center;
	color: ${palette.primary};
	display: flex;
	padding: 8px 16px;
	text-decoration: none;
	transition: color 0.3s ease-in-out;

	&:hover {
		color: ${palette.white};
	}
`
