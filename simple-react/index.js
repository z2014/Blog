/** @jsx Gooact.createElement */
import Gooact, {render, Component} from 'gooact';
// const App = (props) => {
// 	return (<div>{props.name}</div>)
// }
class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			num: 3
		}
		this.click = this.click.bind(this)
	}
	click() {
		this.setState({
			num: 9
		})
	}
	render() {
		return (
			<div>
				<div onClick={this.click}>click</div>
				{this.state.num}
			</div>
			)
	}
}
render(<App name="zcl"/>, document.body);