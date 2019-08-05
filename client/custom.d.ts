// tslint:disable-next-line:interface-name
declare interface Window {
	PRERENDER: undefined | true
	dataLayer: any[]
	gtag: (...args: any[]) => void
	FS: {
		getCurrentSessionURL(thisMoment?: boolean): string
	}
}
