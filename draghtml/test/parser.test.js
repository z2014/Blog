'use strict'
jest.mock('fs')
import Parser from '../script/src/parser'


const data = {
	dt: 11,
	dt_name: '20170807',
	wk_name: '20170807-20170815',
	wk: -11
}

describe('parser test', () => {

	test('测试年月日', () => {
		const html = require('fs').__createTxt('<p><a href="">${dt} ?( ${dt_name} )日;&amp; &nbsp;</a></p>')	
		let parser = new Parser({data: data, config: html})
        expect(parser.render(parser.text)).toBe('<p>20170807日;</p>')
    })

    test('测试百分号,负数,绝对值,小括号', () => {
    	const html = require('fs').__createTxt('<p>${dt}%,/${wk}/,(${dt}-1)</p>')
    	let parser = new Parser({data: data, config: html})
    	expect(parser.render(parser.text)).toBe('<p>1100%,11,10</p>')
    })

    test('多重表达式', () => {
    	const html = require('fs').__createTxt('<p><a href="">${dt} && ${wk}>0 ?( ${dt_name} )日;&amp;aaaa;</a><a href="">${dt}>100 ?( ${dt_name} )日;&amp;oooo;</a></p>')
    	let parser = new Parser({data: data, config: html})
    	expect(parser.render(parser.text)).toBe('<p>aaaa;oooo;</p>')
    })
})