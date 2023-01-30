import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

// className='text-center py-3 bg-success w-auto'

const Footer = () => {
  return (
    <footer className='text-center py-3 bg-success w-auto'>
      <Container>
          <Row>
              <Col className='text-center py-3 bg-success w-auto'>
                  CopyRight &copy; IbarReact SPA.
              </Col>
          </Row>
      </Container>
    </footer>
  )
}

export default Footer;