import { Well, Accordion, Panel, Thumbnail, Carousel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';

// import TransitionGroup from 'react-addons-transition-group'; // ES6

import './App.css';
import NavBar from './my_components/NavBar.js';
import Footer from './my_components/Footer.js';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Carousel>
          <Carousel.Item>
            <img alt="900x500" src="http://via.placeholder.com/1000x500" className="m-0-auto"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src="http://via.placeholder.com/1000x500" className="m-0-auto"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src="http://via.placeholder.com/1000x500" className="m-0-auto"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <Well bsSize="large" className="center m-t-50px">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </Well>
        </div>
        <Accordion className="center">
          <Panel header="Test Collapse" eventKey="1" className="eighty-pt">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </Panel>
        </Accordion>
        <Grid fluid className="center">
          <Row className="center">
            <Col sm={4} md={4} lg={4}>
              <Thumbnail src="http://placehold.it/350x200" alt="200x200">
                <h3>Thumbnail label</h3>
                <Accordion className="center">
                  <Panel header="Test Collapse" eventKey="1">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                </Accordion>
              </Thumbnail>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <Thumbnail src="http://placehold.it/350x200" alt="200x200">
                <h3>Thumbnail label</h3>
                <Accordion className="center">
                  <Panel header="Test Collapse" eventKey="1">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                </Accordion>
              </Thumbnail>
            </Col>
            <Col sm={4} md={4} lg={4}>
              <Thumbnail src="http://placehold.it/350x200" alt="200x200">
                <h3>Thumbnail label</h3>
                <Accordion className="center">
                  <Panel header="Test Collapse" eventKey="1">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                </Accordion>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
        <Grid className="center">
          <Col>
            <Row>
              <Footer/>
            </Row>
          </Col> 
        </Grid>
      </div>
    );
  }
}

export default App;
