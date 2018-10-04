import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import User from './components/User'
import * as firebase from 'firebase';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGwZlDzqQZ3RGAzrqBR8VV2UcOYFYNvSQ",
    authDomain: "chatroom-e3a23.firebaseapp.com",
    databaseURL: "https://chatroom-e3a23.firebaseio.com",
    projectId: "chatroom-e3a23",
    storageBucket: "chatroom-e3a23.appspot.com",
    messagingSenderId: "3749167464"
  };
  firebase.initializeApp(config);
  console.dir(firebase);


class App extends Component {

  constructor(props) {
     super(props);

   this.state = {
     activeRoom: null,
     user: null
   };

   }

   setUser(user){
     this.setState({user:user})

   }

   user(){
     console(this.state.user.displayName)
   }

  setActiveRoom(room){
    this.setState({activeRoom:room})
}



  render() {
  //   var messageList;
	// 	if (this.state.activeRoom) {
	// 	messageList = <MessageList activeRoom={this.state.activeRoom} firebase={firebase}/>;
  // } else {
  //   messageList = null;
  // }

    return (
      <div className="chatroom">
      	<RoomList firebase={firebase}
        setActiveRoom={room => this.setActiveRoom(room)} />
        <MessageList firebase={firebase} />
        <User firebase={firebase}/>
        <div>{(this.state.activeRoom==null?"Choose a room":this.state.activeRoom.name)}</div>
      </div>
    );
  }
}
export default App;
