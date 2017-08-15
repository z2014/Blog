// import React, {Component} from 'react'
// import ReactDOM from 'react-dom'

// class App extends Component{
// 	render () {
// 		return <div>ffff</div>
// 	}
// }

// ReactDOM.render(<App/>,document.getElementById('app'))

import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    const aa = 11
    this.state = {
      ischeck: false,
      bb: `${aa}`
    }
    this.change = this.change.bind(this)
  }

  change() {
    this.setState({
      ischeck: !this.state.ischeck
    })
  }
  componentDidMount () {
    console.log('done')
  }
  
  render() {
    return (<label>
      <input
      type="checkbox"
      checked={this.state.ischeck}
      onChange={this.change}
      />
      {this.state.ischeck ? this.props.labelon : this.props.labeloff}
    </label>);
  }
}
App.displayName = 'App';
module.exports = App;