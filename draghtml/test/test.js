import React from 'react'
import App from '../script/src/entry'
import renderer from 'react-test-renderer'
import {shallow,mount} from 'enzyme'
import sinon from 'sinon'
import 'jsdom-global/register'
import 'jest-enzyme'

test('app to be mount', () => {
    sinon.spy(App.prototype, 'componentDidMount')
	const checkbox = mount(<App/>)
	checkbox.setProps({
		labelon: "on",
		labeloff: "off"
	})
    expect(App.prototype.componentDidMount.calledOnce).toBe(true);
})


test('app has click', () => {
	const checkbox = shallow(
        <App labelon="on" labeloff="off"/>
	)
	expect(checkbox.text()).toEqual('off');
	checkbox.find('input').simulate('change');
	expect(checkbox.text()).toEqual('on')
})

