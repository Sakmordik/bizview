import React, { Component } from 'react';


class Input extends Component {
    render() { 
        return <div className="container m-5 float-center border rounded bg-grey">
            <h2 className="m2 title mt-3 text-center">
                Personal Details
            </h2>
            <div className="input-group mb-3 mt-3">
  <input type="text" className="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div>

<div className="input-group mb-3">
  <select id="" className="form-select-sm rounded dropdown-toggle input-group-text" size="1">
	<option data-countryCode="GB" value="44" Selected>UK (+44)</option>
	<option data-countryCode="US" value="1">USA (+1)</option>
</select>
  <input type="text" className="form-control" placeholder="Phone Number" id="basic-url" aria-describedby="basic-addon3"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Email" aria-label="Username"/>
  <span className="input-group-text">@</span>
  <input type="text" className="form-control" placeholder="Domain" aria-label="Server"/>
</div>
        </div>
    }
}
 
export default Input;