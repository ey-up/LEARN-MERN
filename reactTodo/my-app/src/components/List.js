import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map(item => <li key={item.id}> {item.text} </li> )}
            </ul>
        )
    }
}
