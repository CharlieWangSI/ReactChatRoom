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
    });}

  displayMessage(message){
    this.props.activeRoom==null?"See Messages": message.filter(message.roomID == this.props.activeRoom.key).content
  }

    render(){
      return(
        <div>
        {this.state.messages.filter(message => message.roomID == this.props.activeRoom.key).map( message =>
          <div key={message.key}>
          	<h1>{message.content}</h1>
          </div>
        )}

       </div>

      )
    }
  }


  export default MessageList;
