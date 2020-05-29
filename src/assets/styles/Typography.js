import { css } from 'styled-components'
import { palette } from '@assets/styles/Colors'

export const Typography = css`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${palette.primary};
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		line-height: 1.1;
	}

	h1,
	h2,
	h3 {
		margin: 20px 0 10px;
	}

	h4,
	h5,
	h6 {
		margin: 10px 0;
	}

	h1 {
		font-size: 48px;
		font-weight: 700;
		margin-bottom: 4rem;
	}

	h2 {
		font-size: 30px;
	}

	h3 {
		font-size: 24px;
	}

	h4 {
		font-size: 18px;
	}

	h5 {
		font-size: 14px;
	}

	h6 {
		font-size: 12px;
	}

	p {
		font-size: 14px;
		line-height: 1.428;
		margin: 0 0 10px;
	}

	em {
		font-style: italic;
	}

	strong {
		font-weight: 700;
	}

	blockquote {
		border-left: 3px solid ${palette.tertiary};
		margin: 2rem 0;
		max-width: 70%;
		padding-left: 1.5rem;

		p {
			font-size: 1.1rem;
		}
	}
`