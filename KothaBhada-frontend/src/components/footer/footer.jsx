import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#212529',
        padding: '1rem 0',
        marginTop: '5rem',
      }}
    >
      <Container>
        {/* <h4 style={{ color: 'white', fontSize: '1.5rem' }}>KothaBhada</h4> */}

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ color: 'white' }}>&copy; Copyright 2022 | KhothaBhada</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
