import React, { Component } from 'react';
import logo from './logo.jpg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    CardImg,
    Button
    
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



class AppNavbar extends Component {
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
       
            <div class="topnav" id="myTopnav">
                <Navbar id="myTopnav"dark expand="sm" className="mb-1">
                    <Container>
                        <NavbarBrand href="/">Union Bank</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto">
                                <NavItem>
                                    <NavLink href="https:github.com">HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https:github.com">DNA</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https:github.com">CREDO</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https:github.com">TEAMS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https:github.com">CONTACT US</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
            // <Navbar id="header" class="navbar navbar-fixed-top">
            //     <div id="header-container" class="container navbar-container">
            //         <div class="navbar-header">
            //             <Button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            //                 <span class="sr-only">Toggle navigation</span>
            //                 <span class="icon-bar"></span>
            //                 <span class="icon-bar"></span>
            //                 <span class="icon-bar"></span>
            //             </Button>
            //             <a id="brand" class="navbar-brand" href="#">Project name</a>
            //         </div>
            //         <div id="navbar" class="collapse navbar-collapse">
            //             <ul class="nav navbar-nav">
            //                 <li class="active"><a href="#">Home</a></li>
            //                 <li><a href="#about">About</a></li>
            //                 <li><a href="#contact">Contact</a></li>
            //             </ul>
            //         </div>
            //     </div>
            // </Navbar>



            /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.toggle} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" isOpen={this.state.isOpen}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/">Action</a>
                                <a class="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a class="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>    */
        
        );
        
    }           
}


export default AppNavbar;