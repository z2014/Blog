import React from 'react'
const theme = {
	light: {
		foreground: '#fff',
		background: '#ccc'
	},
	dark: {
		foreground: '#000',
		background: '#eee'
	}
}
const ThemeContext = React.createContext(theme.dark)

function ThemeButton (props){
	return (
		<ThemeContext.Consumer>
			{
				theme => (
					<button
						{...props}
						style={{backgroundColor: theme.background}}
					/>
				)
			}
		</ThemeContext.Consumer>
	)
}

function Toolbar(props) {
	return (
		<ThemeButton onClick={props.changeTheme}>
			changeTheme
		</ThemeButton>
	)
}
export default class ContextTest extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			theme: theme.light
		}
		this.toggle = this.toggle.bind(this)
	}
	toggle() {
		this.setState(state => ({
			theme: 
				state.theme === theme.dark
					? theme.light
					: theme.dark
		}))
	}
	render() {
		return (
			<div>
				<ThemeContext.Provider value={this.state.theme}>
					<Toolbar changeTheme={this.toggle} />
					<ThemeButton>
						我是展现
					</ThemeButton>
				</ThemeContext.Provider>

			</div>
		)
	}
}