/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from '../assets/css/Footer.module.css';


function FooterSection() {
        return (
            <Fragment>
                <Container fluid={true} className={styled.container}>
                    <Row>
                        
                        <Col xl={3} md={3} sm={6}>
                            <div className={styled.footer}>
                                <h4 className="footer-menu-title">More</h4>
                                <a href="#" >About Us</a><br/>
                                <a href="#" >Contact Us</a><br/>
                                <a href="#" >How To Purchase</a><br/>
                                <a href="#" >Privacy Policy</a><br/>
                                <a href="#" >Refund Policy</a><br/>
                            </div>
                        </Col>

                        <Col xl={3} md={3} sm={6}>
                            <div className={styled.footer}>
                                <h4 className="footer-menu-title">More</h4>
                                <a href="#" >About Us</a><br/>
                                <a href="#" >Contact Us</a><br/>
                                <a href="#" >How To Purchase</a><br/>
                                <a href="#" >Privacy Policy</a><br/>
                                <a href="#" >Refund Policy</a><br/>
                            </div>
                        </Col>

                        <Col xl={3} md={3} sm={6}>
                            <div className={styled.footer}>
                                <h4 className="footer-menu-title">More</h4>
                                <a href="#" >About Us</a><br/>
                                <a href="#" >Contact Us</a><br/>
                                <a href="#" >How To Purchase</a><br/>
                                <a href="#" >Privacy Policy</a><br/>
                                <a href="#" >Refund Policy</a><br/>
                            </div>
                        </Col>

                        <Col xl={3} md={3} sm={6}>
                            <div className={styled.footer}>
                                <h4 className="footer-menu-title">More</h4>
                                <a href="#" >About Us</a><br/>
                                <a href="#" >Contact Us</a><br/>
                                <a href="#" >How To Purchase</a><br/>
                                <a href="#" >Privacy Policy</a><br/>
                                <a href="#" >Refund Policy</a><br/>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
}
 
export default FooterSection;