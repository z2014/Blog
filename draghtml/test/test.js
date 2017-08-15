// var should = require('should');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       // assert.equal(-1, [1,2,3].indexOf(4));
//       [1,2,3].indexOf(4).should.be.eql(-1)
//     });
//   });
// });

// require('should');
// const mylib = require('../index')
// // const App = require('../script/src/entry');
// // // import { shallow } from 'enzyme'
// // console.log(App)
// // const enzyme = require('enzyme')
// // describe('<App />', () => {
// // 	it('should render div', () => {
// // 		const wrapper = enzyme.shallow(<App/>)
// // 		wrapper.find(div).length.should.be.eql(1)
// // 	})
// // })

// setTimeout(() => {
//   describe('My First Test', () => {
//     it('Welcome to Tmall', () => {
//       return mylib('Tmall').should.be.fulfilledWith('Hello Tmall');
//     });
//   });
//   run();
// }, 1000);

// import 'should';


// import ReactDOM from 'react-dom';
// import React from 'react';
// import TestUtils from 'react-addons-test-utils';
// describe('test', function() {
//   const container = document.createElement('div');
//   document.body.appendChild(container);
//   afterEach(() => {
//     ReactDOM.unmountComponentAtNode(container);
//   });
//   it('Hello Tmall', function() {
//     let cp = ReactDOM.render(<Welcome/>, container);
//     let welcome = TestUtils.findRenderedComponentWithType(cp, Welcome);
//     ReactDOM.findDOMNode(welcome).textContent.should.be.eql('Hello Tmall');
//   });
// });

import React from 'react'
import App from '../script/src/entry'
import renderer from 'react-test-renderer'
import {shallow,mount} from 'enzyme';
import sinon from 'sinon'
import 'jsdom-global/register';
import 'jest-enzyme';

test('app has click', () => {
	// const checkbox = shallow(
 //        <App labelon="on" labeloff="off"/>
	// )
	// expect(checkbox.text()).toEqual('off');
	// checkbox.find('input').simulate('change');
	// expect(checkbox.text()).toEqual('on')
    sinon.spy(App.prototype, 'componentDidMount')
	const checkbox = mount(<App/>)
	checkbox.setProps({
		labelon: "on",
		labeloff: "off"
	})
    expect(App.prototype.componentDidMount.calledOnce).toBe(true);
})

// it('adds 1 + 2 to equal 3 in TScript', ()=> {
//   const sum = require('../script/src/ts.ts');
//   expect(sum(1, 2)).toBe(3);
// });

// it('adds 1 + 2 to equal 3 in JavaScript', ()=> {
//   const sum = require('../script/src/ts.ts');
//   expect(sum(1, 2)).toBe(3);
// });

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import * as TestUtils from 'react-dom/test-utils';

// const CheckboxWithLabel = require('../script/src/ts');

// it('CheckboxWithLabel changes the text after click', () => {
//   // Render a checkbox with label in the document
//   const checkbox = TestUtils.renderIntoDocument(
//     <CheckboxWithLabel labelOn="On" labelOff="Off" />
//   );

//   const checkboxNode = ReactDOM.findDOMNode(checkbox);

//   // Verify that it's Off by default
//   expect(checkboxNode.textContent).toEqual('Off');

//   // Simulate a click and verify that it is now On
//   TestUtils.Simulate.change(
//     TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
//   );
//   expect(checkboxNode.textContent).toEqual('On');
// });