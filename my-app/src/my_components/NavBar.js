import { Navbar, Image } from 'react-bootstrap';
import React, { Component } from 'react';

// import TransitionGroup from 'react-addons-transition-group'; // ES6

import '../App.css';
import logo from '../images/thingy.png';

function showPortfolio() {
  document.getElementById('portfolio-btn').onclick = togglePortfolio();
}

function togglePortfolio() {
  alert("portfolio!!");
}

class NavBar extends Component {
  render() {
    return (
      <Navbar fixedBottom>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">Ryan Lee</a>
            <a href="/home">
              <Image src={logo} alt="logo" responsive className="rotate logo"/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullRight>
            <Navbar.Link className='portfolio-btn' onClick={showPortfolio}>Portfolio</Navbar.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;