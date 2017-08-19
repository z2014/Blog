import React from 'react'
export default class Wrapper extends React.Component{
	constructor(props, context) {
		super(props)
		this.state = {
			inners: []
		}
		this.addInner = this.addInner.bind(this)
	}
	getChildContext() {
		return {
			addInner: this.addInner.bind(this)
		}
	}
	addInner(inner) {
		this.state.inners.push(inner)
	}
	render() {
		console.log('children', this.props.children)
		return (
			<div>
             {
             	this.state.inners.map((item, index) => {
             		console.log('item', item);
             		return <div key={index}>
             		    aaaa
             		</div>
             	})
             }
            </div>
		)
	}
}

Wrapper.childContextTypes = {
	addInner: React.PropTypes.any
}