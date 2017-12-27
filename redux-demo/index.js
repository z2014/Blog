import React from 'react';
import ReactDOM from 'react-dom'
import { createStore,combineReducer } from './lib/redux.js'

const add = (state = { num: 0 }, action = {}) => {
    switch (action.type) {
        case 'add': 
            let store = state;
            store.num++
            return state
        default: return state
    }
}
const alert = (state = { txt: 'ooo' }, action = {}) => {
    switch (action.type) {
        case 'sub':
            let store = state;
            store.txt += 'ppp'
            return store
        default: return state
    }
}

const reducer =combineReducer({
    add,
    alert
})

const action = () => {
    return {
        type: 'add'
    }
}
// const action = () => {
//     return {
//         type: 'add'
//     }
// }

const initialState = { num: 0 }
const store = createStore(reducer)
const update = () => {
    document.getElementById('num').innerHTML = store.getState().add.num
    document.getElementById('alert').innerHTML = store.getState().alert.txt
}
store.subscribe(update)
class App extends React.Component{
    click() {
        store.dispatch(action())
    }
    alert() {
        store.dispatch(action())
    }
    render() {
        console.log(store.getState())
        return <div>
            <div id="click" onClick={this.click}>click</div>
            <div id="click" onClick={this.alert}>alert</div>
            <div id="num">{ store.getState().add.num }</div>
            <div id="alert">{ store.getState().alert.txt }</div>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))