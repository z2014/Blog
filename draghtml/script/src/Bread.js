import React from 'react'
export default class Bread extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			inners: []
		}
	}
    componentDidMount() {
    	console.log('context', this.context)
    	this.context.addInner(this)
    }
	render() {
		return null
	}
}