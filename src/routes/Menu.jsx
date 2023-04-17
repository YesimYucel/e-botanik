import { Navbar, Col, Container, Form, Button ,Nav} from 'react-bootstrap';
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menulogo from './menuu.png';
import logo from './logo.png';


export default function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand className='col-xl-4' href="/">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block  img-fluid"
            />{' '}
            E - Botanik
          </Navbar.Brand>
          <Form className="d-flex col-xl-4 d-block mx-auto d-none col-xl-block">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" me-2 "
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Button variant="light" onClick={handleShow}>
            <img src={menulogo} width={20} alt="" />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>E-Botanik</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav defaultActiveKey="/home" className="flex-column  justify-content-center">
                <Nav.Link href="/">Anasayfa</Nav.Link>
                <Nav.Link  href="/bitkiler" eventKey="link-1">Bitki Çeşitleri</Nav.Link>
                <Nav.Link  href="/Online" eventKey="link-2">Online Satış</Nav.Link>
                <Nav.Link  href="/Hakkimda" eventKey="link-3">Hakkımda</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>

        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}
