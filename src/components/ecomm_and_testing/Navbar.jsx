import React, { Component } from 'react'

class Navbar extends Component{

    render() {
        return (
            <>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex">
                <h3 className="me-2">Cart </h3>
                <input className="form-control me-2" id="cat" type="search" placeholder="Search by Category" aria-label="Search" onChange={(event) => this.props.onSearch(event.target.value)}/>
                </form>
            </div>
            </nav>
      </>
        )
    }
}

export default Navbar