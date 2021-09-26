import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return <div className="nav p-3 mb-5 bg-dark text-white" >
            <nav className="navbar navbar-expand-lg bg-dark navbar-darl fixed-top">
                <div className="container">
                <h1>
                BizView Application Form
                </h1>
                </div>
            </nav>
        </div>
    }
}
 
export default Header;