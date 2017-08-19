

import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './Wrapper'
import Bread from './Bread'

class App extends React.Component{
  constructor(props) {
    super(props)
    console.log(props)
  }
	render () {
		return (
      <div>
        llll
        <Wrapper>
          <Bread><p>kkkkkk</p></Bread>
          <Bread><p>aaaaaa</p></Bread>
          <Bread><p>bbbbbb</p></Bread>
        </Wrapper>
      </div>
    )
	}
}

ReactDOM.render(<App/>,document.getElementById('app'))












// import React from 'react';

// export default class App extends React.Component {
//   constructor() {
//     super();
//     const aa = 11
//     this.state = {
//       ischeck: false,
//       bb: `${aa}`
//     }
//     this.change = this.change.bind(this)
//   }

//   change() {
//     this.setState({
//       ischeck: !this.state.ischeck
//     })
//   }
//   componentDidMount () {
//     console.log('done')
//   }
  
//   render() {
//     return (<label>
//       <input
//       type="checkbox"
//       checked={this.state.ischeck}
//       onChange={this.change}
//       />
//       {this.state.ischeck ? this.props.labelon : this.props.labeloff}
//     </label>);
//   }
// }
// App.displayName = 'App';


