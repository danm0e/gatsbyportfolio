import styled from 'styled-components'
import { Link } from "gatsby"
import { palette } from '@assets/styles/Colors'

export const Wrapper = styled.div`
	display: flex;
	margin-top: auto;
`

export const PageLink = styled(Link)`
	display: inline-flex;

	& + & {
		margin-left: 0.25rem;
	}
`
export const PageNumber = styled.span`
	background: ${palette.secondaryLight};
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.5rem;
	color: white;
	transition: all 0.3s ease-in-out;

  ${({ isActive }) => isActive && `
		background: ${palette.secondaryDark};
		color: ${palette.primary};
  `}

	&:hover {
		color: white;
		background: ${palette.tertiary};
	}
`