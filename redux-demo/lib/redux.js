const createStore = (reducer) => {
    let state = {}
    state = reducer(state)
    const listeners = []
    const getState = () => {
        return state
    }
    const dispatch = (action) => {
        console.log(action)
        state = reducer(state, action)
        listeners.forEach(listener => {
            listener()
        })
    }
    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners.splice(listeners.indexOf(listener), 1)
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}

const combineReducer = (reducers) => {
    return (state, action) => {
        let nextState = {};
        return Object.keys(reducers).reduce((prestate, key) => {
            prestate[key] = reducers[key](state[key], action)
            return nextState;
        }, nextState)
    }
}



export {
    createStore,
    combineReducer
}