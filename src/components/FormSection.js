import React, { Fragment } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import styled from '../assets/css/FormSection.module.css';


function FormSection() {
        return (
            <Fragment>
                <Container className={styled.myContainer}>
                    <Row>
                        <Col xl={6}>
                           <div className={styled.LeftImages}>
                               <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
                           </div>
                        </Col>
                        <Col xl={6}>
                        <Form className={styled.onboardForm}>
                            <h4 className="section-title">CONTACT WITH US</h4>
                            <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                            <input className="form-control m-2" type="text" placeholder="Your Name"/>
                            <input className="form-control m-2" type="text" placeholder="Mobile Number"/>
                            <input className="form-control m-2" type="text" placeholder="Message"/>
                            <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn">Send</Button>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
}
 
export default FormSection;