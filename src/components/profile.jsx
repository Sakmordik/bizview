import React, { Component } from "react";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    description: "",
    gender: "",
  };

  render() {
    return (
      <div className="container m-4 border rounded bg-grey">
        <h2 className="title text-center my-3">Profile</h2>
        <div className="row">
          <div className="col">
            <div className="form-floating" >
              <input type="text" className="form-control" style={{height:"0px"}}/>
            </div>
          </div>
          <div className="col-auto">
            <div className="input-group">
              <span className="input-group-text">Gender:</span>
              <select
                className="border rounded"
                id="inputGroupSelect01"
                style={{
                  width: "10%",
                  maxWidth: "230px",
                  minWidth: "100px",
                  textAlign: "center",
                }}
                onChange={(e) => {
                  this.setState({ gender: e.target.value });
                  this.updateParentState();
                }}>
                <option defaultValue>Choose...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        {/* <div className="row">
            <div className="form-floating col-md">
              <input
                id="firstNameInput"
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={(e) => {
                  this.setState({ firstName: e.target.value });
                  this.updateParentState();
                }}
              />
              <label htmlFor="firstNameInput" className="text-secondary">
                First Name
              </label>
            </div>
            <div className="form-floating col-md">
              <input
                id="lastNameInput"
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={(e) => {
                  this.setState({ lastName: e.target.value });
                  this.updateParentState();
                }}
              />
              <label htmlFor="lastNameInput" className="text-danger">
                *Please fill in
              </label>
          </div>
          <div className="col-md-auto">
            <div className="input-group">
              <span className="input-group-text">Gender:</span>
              <select
                className="border rounded"
                id="inputGroupSelect01"
                style={{
                  width: "10%",
                  maxWidth: "230px",
                  minWidth: "100px",
                  textAlign: "center",
                }}
                onChange={(e) => {
                  this.setState({ gender: e.target.value });
                  this.updateParentState();
                }}>
                <option defaultValue>Choose...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div> */}
        {/* <div className="input-group mb-3">
</div> */}
        {/* <div className="input-group mb-3">
  <select id="" className="form-select-sm rounded dropdown-toggle input-group-text" size="1">
	<option value="44">UK (+44)</option>
	<option value="1">USA (+1)</option>
</select>
  <input type="text" className="form-control" placeholder="Phone Number"/>
  <input type="text" className="form-control" placeholder="Email" />
</div> */}
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="form-control my-3"
          placeholder="Description (100 words)"
          onChange={(e) => {
            this.setState({ description: e.target.value });
            this.updateParentState();
          }}></textarea>
        {/* <span className="input-group-text">@</span>
  <input type="text" className="form-control" placeholder="Domain" aria-label="Server"/> */}
        <button
          className="btn btn-primary mb-2"
          onClick={() => console.log(this.state)}>
          Test
        </button>
      </div>
    );
  }

  updateParentState = () => {
    this.props.handleUpdate("Profile", this.state);
  };
}

export default Profile;
