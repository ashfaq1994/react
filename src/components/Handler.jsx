import React, { Component } from 'react';

class Handler extends Component {
     
    clickHandler()
    {
    let message = [
        "The above two components are equivalent from React’s point of view.",
        "However, elements can also represent user-defined components:",
        "For example, this code renders “Hello, Sara” on the page:",
    ];

        let rIndex = Math.floor(Math.random() * message.length);

    console.log(message[rIndex]);
    
    }

    render() {
        return (
            <div>
                <button onMouseLeave={this.clickHandler}>leave</button>
            </div>
        )
    }
}

export default Handler;