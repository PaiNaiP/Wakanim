import React, { Component } from 'react'
//import { Link, animateScroll as scroll } from "react-scroll";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/Logo_Wakanim.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsBookmarksFill} from 'react-icons/bs';
import {AiOutlineHistory} from 'react-icons/ai';
import {MdAccountCircle} from 'react-icons/md';

export class Header extends Component {
  
    render() {
      return (
        <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><img style={{width: '150px', paddingBottom: '2.5px'}} src={logo} alt="Logo" /></Navbar.Brand>
        <Nav className="me-auto">
        <Form className="d-flex" >
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            class="form-control shadow-none text-light bg-dark"
            style={{background: '#36393D', 
            borderColor: '#36393D', 
            width:'280px', 
            marginLeft:'300px'}}
            />
            <Button variant="dark"
            className='btn-search' style={{background:'#1D1F22', 
            borderColor:'#1D1F22', 
            marginLeft:'10px' }}>Search</Button>
        </Form>
            <div style={{display:'flex', marginLeft:'320px'}}>
                <Nav.Link href="#features"><BsBookmarksFill style={{fontSize:'22', marginBottom:'2px', marginRight:'10px' }}/></Nav.Link>
                <Nav.Link href="#features"><AiOutlineHistory style={{fontSize:'26', marginBottom:'1px'}}/></Nav.Link>
                <Nav.Link href="#pricing"><MdAccountCircle style={{fontSize:'27', marginBottom:'1px', marginLeft:'7px'}}/></Nav.Link>
            </div>
        </Nav>
        </Container>
    </Navbar>
    </>
      );
    }
  }
  