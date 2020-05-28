import styled from 'styled-components'
import { Link } from "gatsby"
import { palette } from '@assets/styles/Colors'

const offset = '0.5rem';

export const Grid = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	margin-left: -${offset};
	margin-right: -${offset};
	padding: 2rem 1rem;
`

export const Card = styled(Link)`
	background: ${palette.secondaryLight};
	border-radius: 1rem;
	box-sizing: border-box;
	flex: 0 0 33%;
	margin: 0 ${offset};
	overflow: hidden;
	padding: 1rem;
	position: relative;
	transition:  all 0.3s ease-in-out;

	&:after {
		background: ${palette.tertiary};
		bottom: 0;
		content: '';
		height: 5px;
		left: -100%;
		position: absolute;
		transition: left 0.3s ease-in-out;
		width: 100%;
	}

	&:hover {
		background: ${palette.secondaryDark};

		&:after {
			left: 0;
		}
	}

	h3 {
		margin-top : 0;
	}

	p {
		color: ${palette.white};
		font-size: 0.75rem;
	}
`