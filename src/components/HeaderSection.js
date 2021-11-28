/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from '../assets/css/Header.module.css';

function  HeaderSection(){
        return (
            <Fragment>
               <Container className={styled.container} fluid={true}>
                   <Row>
                       <Col md={2}>
                           <div className={styled.logo}>
                               <h2>SCT-Bangla</h2>
                           </div>
                       </Col>
                       <Col md={8}>
                           <div className={styled.NavMenu}>
                             <ul>
                                <li><a href="#" class="current">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                              </ul>
                           </div>
                       </Col>
                       <Col md={2}>
                           <div className={styled.search}>
                              <input type="text"  placeholder="Search"/>
                           </div>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
}

export default HeaderSection;