import styled from 'styled-components'
import { Link } from "gatsby"
import { palette } from '@assets/styles/Colors'

export const Wrapper = styled.div`
	padding-bottom: 2rem;
	padding-left: 0.5rem;
	margin-bottom: 2rem;
`

export const BackBtn = styled(Link)`
	background: ${palette.secondaryLight};
	border-radius: 0 5px 5px 0;
	box-sizing: border-box;
	color: ${palette.primary};
	display: inline-block;
	font-size: 0.6rem;
	height: 20px;
	letter-spacing: 0.1rem;
	padding: 0.5rem 1rem 1rem;
	position: relative;
	text-transform: uppercase;
	transition: all 0.3s ease-in-out;

	&:after {
		border: solid transparent;
		border-right-color: ${palette.secondaryLight};
		border-width: 12px;
		box-sizing: border-box;
		content: " ";
		height: 0;
		pointer-events: none;
		position: absolute;
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		transition: border-color 0.3s ease-in-out;
		width: 0;
	}

	&:hover {
		color: ${palette.white};
		background: ${palette.tertiary};

		&:after {
			border-right-color: ${palette.tertiary};
		}
	}
`