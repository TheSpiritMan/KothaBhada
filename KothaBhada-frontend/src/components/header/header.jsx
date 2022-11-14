import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAppContext } from '../context'

const Header = () => {
  const { isAuthenticated } = useAppContext()

  const handleLogout = () => {
    window.localStorage.removeItem('access_token')
    window.location.replace('http://localhost:3000/login')
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ paddingTop: '.5rem', paddingBottom: '.5rem' }}>
        <Link href="/">
          <Navbar.Brand>KothaBhada</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {isAuthenticated ? (
            <Nav style={{ display: 'flex', columnGap: '2rem' }}>
              <Link href="/create">
                <Nav.Item style={{ color: 'white', cursor: 'pointer' }}>
                  Create Post
                </Nav.Item>
              </Link>
              <Link href="/my-posts">
                <Nav.Item style={{ color: 'white', cursor: 'pointer' }}>
                  My posts
                </Nav.Item>
              </Link>
              <Nav.Item
                onClick={handleLogout}
                style={{ color: 'white', cursor: 'pointer' }}
              >
                Logout
              </Nav.Item>
            </Nav>
          ) : (
            <Nav style={{ display: 'flex', columnGap: '2rem' }}>
              <Link href="/login">
                <Nav.Item style={{ color: 'white' }}>Login</Nav.Item>
              </Link>
              <Link href="/register">
                <Nav.Item style={{ color: 'white' }}>Signup</Nav.Item>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
