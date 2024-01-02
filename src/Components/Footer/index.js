import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
const FooterComponent = () => {

    return (
        <>
            <footer className='myFooter'>
                <Container>
                    <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="https://www.facebook.com/manish.k.mandal.94/" target="_blank">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/manish-develops/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://twitter.com/manishdevelops" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://github.com/manishdevelops" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© Developed  by <a href="https://github.com/manishdevelops" target="_blank" rel="noreferrer">Manish Mandal</a>.</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;