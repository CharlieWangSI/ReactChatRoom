import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      newMessage: ''
    };

    this.messagesRef = this.props.firebase.database().ref('Messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });}

  displayMessage(message){
    this.props.activeRoom==null?"See Messages": message.filter(message.roomID == this.props.activeRoom.key).content
  }

  handleChange(e) {
     this.setState({ newMessage: e.target.value })
   }

  handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newMessage) { return }
     this.messagesRef.push({content: this.state.newMessage,roomID:this.props.activeRoom.key,sentAt:this.props.firebase.database.ServerValue.TIMESTAMP,username:this.props.user.displayName});
   }

    render(){
      return(


        <div>
        <h1>"here is the message"</h1>
        {!this.props.activeRoom
          ?null
          :this.state.messages.filter(message => message.roomID == this.props.activeRoom.key).map(message =>
          <div key={message.key}>
          	<h1>{message.content}</h1>
          </div>
        )}

        <form onSubmit={ (e) => this.handleSubmit(e) }>
            <input type="text" value={ this.state.newMessage } onChange={ (e) => this.handleChange(e) } />
            <input type="submit" />
       </form>

       </div>

      )
    }
  }


  export default MessageList;
