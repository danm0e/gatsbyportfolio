import styled from 'styled-components'
import { Link } from "gatsby"
import { palette } from '@assets/styles/Colors'

export const Wrapper = styled.div`
	padding-top: 2rem;
`

export const Item = styled(Link)`
	background: ${palette.secondaryLight};
	border-radius: 1rem;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 1rem;
	overflow: hidden;
	padding: 1rem;
	position: relative;
	transition: background 0.3s ease-in-out;

	&:after {
		background: ${palette.tertiary};
		bottom: -100%;
		content: '';
		height: 100%;
		left: 0;
		position: absolute;
		transition: bottom 0.3s ease-in-out;
		width: 5px;
	}

	&:hover {
		background: ${palette.secondaryDark};

		&:after {
			bottom: 0;
		}
	}

	h3, h6 {
		flex-basis: 50%;
		margin-top: 0;
	}

	h6 {
		align-self: flex-start;
		color: ${palette.grey[300]};
		text-align: right;
	}

	p {
		color: ${palette.white};
	}
`