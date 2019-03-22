import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import { Collapse, Button } from 'reactstrap';
  import '../ApplyNow.css';
  

class AppNav extends Component {
    
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return(
            <HashRouter>
                <div className="homeBackground" id="homeBackground">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">UnionBank</a> 
                            <Button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.toggle}>
                                <span className="navbar-toggler-icon"></span>
                            </Button>
                            <Collapse className="collapse navbar-collapse" isOpen={this.state.isOpen} navbar>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">HOME<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a class="nav-link" href="#">DNA</a>
                                    </li>
                                    <li className="nav-item">
                                        <a class="nav-link" href="#">CREDO</a>
                                    </li>
                                    <li className="nav-item">
                                        <a class="nav-link" href="#">TEAMS</a> 
                                    </li>
                                    <li className="nav-item">
                                        <a class="nav-link" href="#">CONTACT US</a>
                                    </li>

                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                    </button>
                                </form>
                            </Collapse>
                        </div>
                    </nav>    
                </div>
                <div className="homeBackground">
                    
                </div>
            </HashRouter>
        );
    }
}

export default AppNav;