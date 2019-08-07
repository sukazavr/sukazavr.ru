import { em, percent } from 'csx'
import Head from 'next/head'
import { style, media } from 'typestyle'
import { TITLE } from '../generic/constants'
import { Reset } from '../generic/Reset'
import { horizontalSpaced, verticalSpaced } from '../generic/utils'
import { Ico } from '../generic/Ico'

// eslint-disable-next-line import/no-default-export
export default function Main() {
	const years = new Date().getFullYear() - 2006
	return (
		<>
			<Head>
				<title>{TITLE}</title>
			</Head>
			<Reset />
			<div className={$container}>
				<div className={$s1}>
					<div className={$myName}>
						<p>Hey!</p>
						<p>My name is Dima</p>
					</div>
					<div className={$myPhoto}>
						<img src="/static/sukazavr-1.jpg" alt="Dima" />
					</div>
				</div>
				<div className={$s2}>
					I have <strong>{years}&nbsp;years</strong> expertise
					<br />
					in a field of <strong>design&nbsp;and&nbsp;development</strong>
					<br />
					of <strong>Internet&nbsp;Products</strong>
				</div>
				<div className={$s3}>
					<p>I'm looking for high skilled partners, especially experienced in marketing.</p>
					<p>Is it you? Reach me out:</p>
				</div>
				<div className={$s4}>
					<Ico ico="li" />
					<Ico ico="telegram" />
					<Ico ico="whatsapp" />
					<Ico ico="messenger" />
				</div>
			</div>
		</>
	)
}

const EDGE_PADDING = em(1.2)
const EDGE_PADDING_S = em(0.8)
const $container = style(
	{
		padding: EDGE_PADDING,
	},
	media(
		{ minWidth: 0, maxWidth: 375 },
		{
			padding: EDGE_PADDING_S,
		}
	)
)

const $s1 = style(
	{
		display: 'flex',
		alignItems: 'center',
	},
	media(
		{ minWidth: 0, maxWidth: 375 },
		{
			flexDirection: 'column',
			...verticalSpaced(0.8),
		}
	),
	media(
		{ minWidth: 376 },
		{
			...horizontalSpaced(1),
		}
	)
)

const $myName = style(
	{
		$nest: {
			'& p': {
				lineHeight: 1.4,
			},
		},
	},
	media(
		{ minWidth: 0, maxWidth: 375 },
		{
			textAlign: 'center',
		}
	),
	media(
		{ minWidth: 0, maxWidth: 600 },
		{
			fontSize: em(1.4),
		}
	),
	media(
		{ minWidth: 601 },
		{
			fontSize: em(2),
		}
	)
)

const IMG_SIZE = em(7)
const IMG_SIZE_S = em(5)
const $myPhoto = style(
	{
		flex: 'none',
		$nest: {
			'& img': {
				width: IMG_SIZE,
				height: IMG_SIZE,
				borderRadius: percent(50),
			},
		},
	},
	media(
		{ minWidth: 0, maxWidth: 600 },
		{
			$nest: {
				'& img': {
					width: IMG_SIZE_S,
					height: IMG_SIZE_S,
				},
			},
		}
	)
)

const $s2 = style(
	{
		marginTop: em(1.8),
		fontSize: em(1.8),
		lineHeight: 1.3,
	},
	media(
		{ minWidth: 0, maxWidth: 375 },
		{
			marginTop: em(1.3),
			fontSize: em(1.4),
			lineHeight: 1.2,
		}
	),
	media(
		{ minWidth: 376, maxWidth: 600 },
		{
			marginTop: em(1.4),
			fontSize: em(1.5),
		}
	)
)

const $s3 = style(
	{
		$nest: {
			'& p': {
				lineHeight: 1.2,
			},
			'& p + p': {
				marginTop: em(0.5),
			},
		},
	},
	media(
		{ minWidth: 0, maxWidth: 375 },
		{
			marginTop: em(2.8),
			$nest: {
				'& p': {
					fontSize: em(1.8),
				},
			},
		}
	),
	media(
		{ minWidth: 376, maxWidth: 600 },
		{
			marginTop: em(3.6),
			$nest: {
				'& p': {
					fontSize: em(2),
				},
			},
		}
	),
	media(
		{ minWidth: 601 },
		{
			marginTop: em(4),
			maxWidth: em(60),
			$nest: {
				'& p': {
					fontSize: em(3.4),
				},
			},
		}
	)
)

const $s4 = style(
	{
		margin: `${em(1.8)} -${EDGE_PADDING} 0`,
		display: ['flex', 'grid'],
		flexWrap: 'wrap',
	},
	media(
		{ minWidth: 0, maxWidth: 375 },
		{
			gridTemplateColumns: 'repeat(auto-fill, minmax(5.2em, 1fr))',
			margin: `${em(1.2)} -${EDGE_PADDING_S} 0`,
			$nest: {
				'& a': {
					fontSize: em(0.76),
				},
			},
		}
	),
	media(
		{ minWidth: 376, maxWidth: 600 },
		{
			$nest: {
				'& a': {
					fontSize: em(0.98),
				},
			},
		}
	),
	media(
		{ minWidth: 376 },
		{
			gridTemplateColumns: 'repeat(auto-fill, minmax(6.8em, 1fr))',
		}
	)
)
