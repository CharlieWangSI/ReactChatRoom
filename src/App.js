import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList'
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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newChatRoomName: ''
    };
  }

  handleChange(e) {
     this.setState({ newChatRoomName: e.target.value })
   }

  handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newChatRoomName) { return }
     this.roomsRef.push({name: this.state.newChatRoomName});
   }


  render() {
    return (
      <div className="chatroom">
      	<RoomList firebase={firebase} />
      </div>

      <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newChatRoomName } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
     </form>
    );
  }
}

export default App;
