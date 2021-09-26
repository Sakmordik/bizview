import React, { Component } from 'react';


class Profile extends Component {
    render() { 
        return <div className="container m-4 border rounded bg-grey">
            <h2 className="title my-2 text-center">
                Profile
            </h2>
            <div className="input-group my-3">
  <input type="text" className="form-control" placeholder="First Name"/>
  
  <input type="text" className="form-control" placeholder="Last Name" />
</div>

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

<div className="input-group mb-3">
  <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Description"></textarea>
  {/* <span className="input-group-text">@</span>
  <input type="text" className="form-control" placeholder="Domain" aria-label="Server"/> */}
</div>
        </div>
    }
}
 
export default Profile;