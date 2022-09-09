import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  FooterLink
} from "./FooterStyle";
import "./Footer.css"
  
const Footer = () => {
  return (
    <Box>
      
      <Container>
      <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">About</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <p><strong><i className="fa-solid fa-envelope"></i> Email:</strong> angazajamii@gmail.com</p>
            <p><strong><i className="fa-solid fa-phone"></i> Tel:</strong> +254 700000000</p>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <p><i className="fa-brands fa-facebook"></i>  Facebook</p>
            <p><i className="fa-brands fa-instagram"></i> Instagram</p>
            <p><i className="fa-brands fa-twitter"></i> Twitter</p>
          </Column> 
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;