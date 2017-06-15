import { Button } from 'react-bootstrap';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
// import classnames from 'classnames';
 // Import a component from another file
import '../App.css';


class Portfolio extends Component {
  render() {
    return <Button className="btn-cheezy">My Red Button Component</Button>;
  }
}

export default Portfolio;