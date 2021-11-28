/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from '../assets/css/googleMap.module.css';

function ContactMap() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col xl={12} md={12}>
                        <iframe className={styled.googleMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9009669046704!2d90.38828391450218!3d23.750910694674705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1601135282389!5m2!1sen!2sbd" ></iframe>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
}
 
export default ContactMap;