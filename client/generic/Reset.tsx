import { px } from 'csx'
import { Component } from 'react'
import { cssRaw, cssRule, setStylesTarget } from 'typestyle'
import { colorBlack100, colorWhite100, fontGeneral } from './constants'

export const STYLES_TARGET = 'typestyle'

export class Reset extends Component {
	componentDidMount() {
		const target = document.getElementById(STYLES_TARGET)
		if (target) {
			setStylesTarget(target)
		}
	}

	render() {
		return null
	}
}

cssRaw(`
@import url('https://fonts.googleapis.com/css?family=Crimson+Pro:400,700&display=optional');
a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:inherit;vertical-align:baseline;line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before{content:'';content:none}q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}button,input,textarea{outline:0;color:inherit;font:inherit;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;padding:0}input::-ms-clear{display:none}*{border:none;background:0 0;text-decoration:none;padding:0;margin:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;outline:0}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body,html{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased;cursor:default}
`)

cssRule('html, body', {
	fontFamily: fontGeneral,
	fontSize: px(20),
	color: colorBlack100,
	backgroundColor: colorWhite100,
})
