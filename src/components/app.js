import React, { Component } from 'react';
import UserList from '../containers/userList'
import UserDetail from '../containers/userDetail'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList/> <UserDetail/>
      </div>
    );
  }
}
