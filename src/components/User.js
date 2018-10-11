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


  render(){
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    return(
      <div>
      <input type="button" value="signIn" onChange={this.props.firebase.auth().signInWithPopup(provider)}/>
      <input type="button" value="signOut" onChange={this.props.firebase.auth().signOut()}/>
      <div>{this.props.user}</div>
      </div>
    )
  }
}


export default User;
