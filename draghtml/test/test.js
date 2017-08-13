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


import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Welcome from '../script/src/entry.js';

describe('<Welcome />', () => {
  it('calls componentDidMount', () => {
    const wrapper = enzyme.mount(<Welcome />);
    chai.expect(Welcome.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

// import TestUtils from 'react-addons-test-utils';

// function shallowRender(Component) {
//   const renderer = TestUtils.createRenderer();
//   renderer.render(<Component/>);
//   return renderer.getRenderOutput();
// }

// describe('Shallow Rendering', function () {
//   it('App\'s title should be Todos', function () {
//     const app = shallowRender(Welcome);
//     expect(app.props.children[0].type).to.equal('h1');
//     expect(app.props.children[0].props.children).to.equal('Todos');
//   });
// });