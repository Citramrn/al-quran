import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { firebaseAuthentication } from '../../config/firebase'

export default class Menu extends Component {
    componentDidMount() {
        firebaseAuthentication.onAuthStateChanged((user) => {
            if (!user) {
                this.props.history.push('/login')
            }
        })
    }

    handleLogOut = () => {
        firebaseAuthentication.signOut()
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="#FFFFFF" variant="dark" className='shadow-sm'>
                <Container>
                    <Link to='/home'>
                        <Navbar.Brand className='brand'><i className='bx bxs-book-reader'></i>MyAl Qur'an</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                        <i className='bx bx-menu'></i>                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="w-100 justify-content-center">
                            <ul className="navbar-nav w-100 justify-content-center">
                                <li className="nav-item active">
                                    <Link className="nav-link text-light" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </Nav>
                        <Nav>
                            <Link className="nav-link text-light" to="/login" onClick={this.handleLogOut}><button type="button" className="btn btn-outline-light rounded-pill">Log Out</button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}