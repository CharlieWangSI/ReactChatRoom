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

  render() {
    return (
      <div className="chatroom">
      	<RoomList firebase={firebase} />
      </div>

    );
  }
}

export default App;
