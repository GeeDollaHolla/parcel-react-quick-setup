import React, { Component } from 'react'

export default class App extends Component {
    render() {
        const string = ['This is a JavaScript String', 'This is a new line.']
        return <div className="App">{string.map(i => <h1>{i}</h1>)}</div>
    }
}
