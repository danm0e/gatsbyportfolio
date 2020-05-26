import styled from 'styled-components'
import { Link } from "gatsby"
import { palette } from '../../assets/styles/Colors'

export const Wrapper = styled.div`
	display: flex;
	background-color: ${palette.secondary};
`

export const MenuItem = styled(Link)`
	color: ${palette.primary};
	display: block;
	padding: 8px 16px;
	text-decoration: none;
	transition: color 0.3s ease-in-out;

	&:hover {
		color: ${palette.white};
	}
`
