import React, { Component } from "react";
import $ from "jquery";

class Profile extends Component {
  inputs = {
    fullName: "",
    description: "",
    gender: "",
  };

  render() {
    return (
      <div className="container m-4 border rounded bg-grey">
        <h2 className="title text-center my-3">Profile</h2>
        <div className="row">
          <div className="col">
            <input
              id="fullNameInput"
              type="text"
              className="form-control"
              // style={{ height: "40px" }}
              placeholder="Full Name"
              onChange={(e) => {
                $("#" + e.target.id).removeClass("is-invalid");
                this.inputs.fullName = e.target.value;
                this.props.handleUpdate("Profile", this.inputs);
              }}
            />
            <label htmlFor="fullNameInput" className="invalid-feedback">
              Please provide a full name.
            </label>
          </div>
          <div className="col-3">
            <div className="input-group">
              <span className="input-group-text">Gender:</span>
              <select
                className="rounded form-select"
                id="genderSelect"
                style={{
                  width: "10%",
                  maxWidth: "230px",
                  minWidth: "100px",
                  textAlign: "center",
                }}
                onChange={(e) => {
                  $("#" + e.target.id).removeClass("is-invalid");
                  this.inputs.gender = e.target.value;
                  this.props.handleUpdate("Profile", this.inputs);
                }}>
                <option selected disabled value="">
                  Choose...
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="genderSelect" className="invalid-feedback">
                Please select a gender!
              </label>
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
        <div className="position-relative mt-3 mb-4">
          <textarea
            name=""
            id="descriptionTextArea"
            cols="30"
            rows="5"
            className="form-control mt-3"
            placeholder="Description (100 words)"
            onChange={(e) => {
              $("#" + e.target.id).removeClass("is-invalid");
              this.inputs.description = e.target.value;
              this.props.handleUpdate("Profile", this.inputs);
              this.setWordCount(e.target.value);
            }}></textarea>
          <div className="invalid-feedback">Please give a description!</div>
          <label
            id="wordCountLabel"
            htmlFor="descriptionTextArea"
            className="position-absolute end-0 text-secondary">
            0 words
          </label>
        </div>
        {/* <span className="input-group-text">@</span>
  <input type="text" className="form-control" placeholder="Domain" aria-label="Server"/> */}
        {/* <button
          className="btn btn-primary mb-2"
          onClick={() => console.log(this.state)}>
          Test
        </button> */}
      </div>
    );
  }

  updateParentState = (state) => {
    this.props.handleUpdate("Profile", state);
  };

  setWordCount = (text) => {
    text = text.split(" ");
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] !== "") {
        wordCount++;
      }
    }

    $("#wordCountLabel").text(String(wordCount) + " words");
  };
}

export default Profile;
