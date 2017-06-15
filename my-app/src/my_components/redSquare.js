import React from 'react';
import { Button } from 'react-bootstrap';
 // Import a component from another file

class RedSquare extends React.Component {
  render() {
    return <Button className="btn-cheezy">My Red Button Component</Button>;
  }
}

export default RedSquare;