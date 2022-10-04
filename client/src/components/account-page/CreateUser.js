import React, { Component } from 'react'

export class CreateUser extends Component {
  render() {
    return (
      <div className="pr-3 pl-3">
        <h1>Create New User</h1>
        <div className="form-group">
            <label htmlFor="name">User Name <span className="text-danger">*</span></label>
            <input type="text" name="name" id="name" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email <span className="text-danger">*</span></label>
            <input type="email" name="email" id="email" className="form-control" />
        </div>
        <div class="form-group">
            <label htmlFor="account-type">Account Type</label>
            <select class="form-control" id="account-type">
            <option value="user">User</option>
            <option value="admin">Admin</option>
            </select>
        </div>
        <button className="btn btn-primary">Create New User <span className="fa fa-user-plus"></span></button>
      </div>
    )
  }
}

export default CreateUser