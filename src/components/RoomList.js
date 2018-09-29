import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
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


  render(){
    return(
      this.state.rooms.map( room =>
        <div key={room.key}>
        	<h1>{room.name}</h1>
        </div>
      )

    )
  }
}

export default RoomList;
