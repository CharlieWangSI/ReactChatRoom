import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
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
     activeRoom: null
   };
   }

  setActiveRoom(room){
    this.setState({activeRoom:room})
}

  render() {
    return (
      <div className="chatroom">
      	<RoomList firebase={firebase} />
        <RoomList setActiveRoom={this.setActiveRoom} />
        <MessageList firebase={firebase}/>
        <div>{(this.state.activeRoom==null?"Choose a room":this.state.activeRoom.name)}</div>
      </div>
    );
  }
}
export default App;
