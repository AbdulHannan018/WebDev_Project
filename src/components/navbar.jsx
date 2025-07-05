import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../Main.css";

function BasicExample() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={`gaming-navbar ${scrolled ? 'scrolled' : ''}`}
        fixed="top"
      >
        <Container>
          <Navbar.Brand className="gaming-brand">
            <Link to="/">
              <span className="brand-text">Game</span>
              <span className="brand-accent">Nexus</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="gaming-toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gaming-nav">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                <span className="nav-icon">🏠</span>
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/news" 
                className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}
              >
                <span className="nav-icon">📰</span>
                News
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/reviews" 
                className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`}
              >
                <span className="nav-icon">⭐</span>
                Reviews
              </Nav.Link>
            </Nav>
            <Button className="login-btn" onClick={handleShow}>
              <span className="btn-icon">👤</span>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Login */}
      <Modal show={show} onHide={handleClose} className="gaming-modal">
        <Modal.Header closeButton className="gaming-modal-header">
          <Modal.Title className="gaming-modal-title">
            <span className="modal-icon">🎮</span>
            Welcome to Game Nexus
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="gaming-modal-body">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="gaming-form-label">
                <span className="label-icon">📧</span>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                className="gaming-form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="gaming-form-label">
                <span className="label-icon">🔒</span>
                Password
              </Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                className="gaming-form-control"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="gaming-modal-footer">
          <Button variant="outline-secondary" onClick={handleClose} className="btn-cancel">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose} className="btn-login">
            <span className="btn-icon">🚀</span>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BasicExample;
