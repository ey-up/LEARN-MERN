import React, { Component } from 'react'
import "../App.css";
export default class List extends Component {

 
    render() {
        return (
            <ul>
                {this.props.list.map((item,index) => <li key={item.id}> {item.text}
                 </li> )}
            </ul>
        )
    }
}
