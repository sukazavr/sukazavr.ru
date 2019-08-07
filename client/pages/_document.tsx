import Document, { DocumentContext, Head, Main, NextScript } from 'next/document'
import { getStyles } from 'typestyle'
import { DESCRIPTION, DOMAIN, TITLE } from '../generic/constants'
import { STYLES_TARGET } from '../generic/Reset'

// eslint-disable-next-line import/no-default-export
export default class extends Document<{ styleTags: string }> {
	static async getInitialProps({ renderPage }: DocumentContext) {
		const page = renderPage()
		const styleTags = getStyles()
		return { ...page, styleTags }
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<script dangerouslySetInnerHTML={{ __html: gtmScript }} />
					<style id={STYLES_TARGET} dangerouslySetInnerHTML={{ __html: this.props.styleTags }} />

					<meta name="keywords" content="personal page, Dima, sukazavr" />
					<meta name="description" content={DESCRIPTION} />
					<link rel="canonical" href={DOMAIN} />

					{/* Open Graph / Facebook */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content={DOMAIN} />
					<meta property="og:title" content={TITLE} />
					<meta property="og:description" content={DESCRIPTION} />
					<meta property="og:image" content="/static/og-image.jpg" />

					{/* Twitter */}
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content={DOMAIN} />
					<meta property="twitter:title" content={TITLE} />
					<meta property="twitter:description" content={DESCRIPTION} />
					<meta property="twitter:image" content="/static/og-image.jpg" />

					{/* Favicon */}
					<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.ico" />
					<link rel="manifest" href="/static/site.webmanifest" />
					<link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#004bff" />
					<meta name="apple-mobile-web-app-title" content="SZ" />
					<meta name="application-name" content="SZ" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<body>
					<noscript>
						{/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
						<iframe
							src={gtmIFrameSrc}
							height="0"
							width="0"
							style={{ display: 'none', visibility: 'hidden' }}
						/>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

const gtmInStage = false
const gtmKey = 'GTM-59MHX7Q'
const gtmStageAppendix = gtmInStage
	? // TODO: change to real stage evg string (create in GTM)
	  '&gtm_auth=u2vKPaND5F693qqWD1LN7g&gtm_preview=env-8&gtm_cookies_win=x'
	: ''
const gtmIFrameSrc = `https://www.googletagmanager.com/ns.html?id=${gtmKey}${gtmStageAppendix}`
const gtmScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl
${gtmInStage ? `+'${gtmStageAppendix}'` : ''}
;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmKey}');
`
