import styled from 'styled-components'
import { palette } from '../../assets/styles/Colors'

export const Wrapper = styled.div`
	flex-grow: 1;
`

export const Title = styled.div`
	color: ${palette.white};
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
`

export const Tagline = styled.div`
	color: ${palette.primary};
	font-size: 0.85rem;
`
