import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newChatRoomName: ''
    };

    this.roomsRef = this.props.firebase.database().ref('Rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });

  }

  handleChange(e) {
     this.setState({ newChatRoomName: e.target.value })
   }

  handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newChatRoomName) { return }
     this.roomsRef.push({name: this.state.newChatRoomName});
   }


  render(){
    return(
      <div>
      {this.state.rooms.map( room =>
        <div key={room.key}>
        	<h1>{room.name}</h1>
        </div>
      )}

      <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newChatRoomName } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
     </form>
     </div>

    )
  }
}

export default RoomList;
