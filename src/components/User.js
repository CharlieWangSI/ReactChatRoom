import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    })
  }

  signIn() {
    this.props.firebase.auth().signInWithPopup(new this.props.firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  render(){
    return(
      <div>
        <input type="button" value="signIn" onClick={this.signIn.bind(this)}/>
        <input type="button" value="signOut" onClick={this.signOut.bind(this)}/>
      </div>
    )
  }
}


export default User;
