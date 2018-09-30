import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      newMessage: ''
    };

    this.roomsRef = this.props.firebase.database().ref('Messages');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });

    render(){
      return(
        <div>
        {this.state.messages.map( message =>
          <div key={message.key}>
          	<h1>{message.value}</h1>
          </div>
        )}
       </div>

      )
    }
  }
}

  export default MessageList;
