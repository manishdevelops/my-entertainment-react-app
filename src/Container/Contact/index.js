import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import './style.css';
const ContactContainer = () => {
    const myData = [
        { name: 'Facebook', link: 'https://www.facebook.com/manish.k.mandal.94/', text: 'Follow to my facebook.' },
        { name: 'Linkedin', link: 'https://www.linkedin.com/in/manish-develops/', text: 'Follow to my linkedin.' },
        { name: 'Twitter', link: 'https://twitter.com/manishdevelops', text: 'Follow to my twitter.' },
        { name: 'GitHub', link: 'https://github.com/manishdevelops', text: 'Follow to my github account.' },
        { name: 'Email', link: 'mailto:manish.kumar.mandal411@gmail.com', text: 'write to me a mail' }
    ]
    return (
        <div className='contactWrap'>
            <Container>
                <Row>
                    <Col>
                        <p>CONNECT WITH US</p>
                        <h1>Get in Touch</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='conectIcon'>
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
                </Row>
                <Row>
                    <Col>
                        <ListGroup className='contactList'>
                            {
                                myData && myData.length > 0 ? myData.map((item) => {
                                    return (
                                        <ListGroup.Item key={item.name}>
                                            <span>{item.text}</span>
                                            <a href={item.link} rel="noreferrer" target="_blank">
                                                {item.link}
                                            </a>
                                        </ListGroup.Item>
                                    )
                                }) : ''
                            }

                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactContainer;