import React, { Component } from "react";
import $ from "jquery";

class ContactInfo extends Component {
  render() {
    return (
      <div className="container p-1 m-4 border rounded row">
        <h2 className="title my-2 text-center">Contact Info</h2>
        <div className="col-md-6">
          <div className="input-group my-1">
            <input
              id="emailInput"
              type="text"
              className="form-control rounded-end"
              placeholder="Email"
              onChange={(e) => {
                $("#" + e.target.id).removeClass("is-invalid");
              }}
            />
            <label
              id="emailInputLabel"
              htmlFor="emailInput"
              className="invalid-feedback"></label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group my-1">
            <select
              id="countryCodeSelect"
              className="form-select-md rounded dropdown-toggle input-group-text"
              size="1">
              <option value="44">UK (+44)</option>
              <option value="1">USA (+1)</option>
            </select>
            <input
              id="phoneInput"
              type="text"
              className="form-control rounded-end"
              placeholder="Phone Number"
              onChange={(e) => {
                $("#" + e.target.id).removeClass("is-invalid");
              }}
            />
            <label
              id="phoneInputLabel"
              htmlFor="phoneInput"
              className="invalid-feedback"></label>
          </div>
        </div>
        <div className="input-group my-1 col-md">
          <input
            id="linkedInUrlInput"
            type="text"
            className="form-control rounded-end"
            placeholder="LinkedIn URL(optional)"
            onChange={(e) => {
              $("#" + e.target.id).removeClass("is-invalid");
            }}
          />
          <label htmlFor="linkedInUrlInput" className="invalid-feedback">
            Invalid linkedIn URL!
          </label>
        </div>
        <div className="input-group my-1 col-md">
          <input
            id="instagramUrlInput"
            type="text"
            className="form-control rounded-end"
            placeholder="Instagram URL(optional)"
            onChange={(e) => {
              $("#" + e.target.id).removeClass("is-invalid");
            }}
          />
          <label htmlFor="instagramUrlInput" className="invalid-feedback">
            Invalid Instagram URL!
          </label>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
