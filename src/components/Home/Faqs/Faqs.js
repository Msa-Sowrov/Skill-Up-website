import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faqs = () => {
    return (
        <div className="home">
            <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>How To Learn Web Designing Step By Step</Accordion.Header>
    <Accordion.Body>
    Want to get started quickly? A website builder like Wix can help to give you a head start with a stylish website design, as you begin to learn the concepts and building blocks of what goes into a website.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How To Become Succes In Designing & Development?</Accordion.Header>
    <Accordion.Body>
    You don’t have to start with a massive website or crazy design; start small. Play with the website, figure out what makes things work. (And make sure to inspect the code, so you can start getting familiar with what’s making your website work.)
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Learn Web Designing In Advance Level</Accordion.Header>
    <Accordion.Body>
    Start a Website. The best way to start learning web design is to start doing it. ...
Read Everything You Can. Start reading. ...
Be An Effective Communicator. ...
Subscribe to Tuts+ & Envato Elements. ...
Think in HTML. ...
Play with Code at Codeacademy. ...
Learn to Understand CSS. ...
Apply Your Design Skills to the Web.    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What is grapic design??</Accordion.Header>
    <Accordion.Body>
    Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Faqs;