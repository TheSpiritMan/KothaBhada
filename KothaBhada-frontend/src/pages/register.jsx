import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { axiosInstance } from '../services/axios'

const Register = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const phoneRef = useRef(null)
  const fullNameRef = useRef(null)
  const router = useRouter()
  const [error, setError] = useState(null)

  console.log('router', router)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axiosInstance.post('/user-register', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        fullName: fullNameRef.current.value,
        phnNumber: phoneRef.current.value,
      })
      window.location.replace('http://localhost:3000/login')
      setError(null)
    } catch (err) {
      console.log('err', err.response)
      // setError('Username or password is not correct.')
    }
  }
  return (
    <div style={{ maxWidth: '20rem', margin: 'auto', paddingTop: '3rem' }}>
      <h3 style={{ marginBottom: '2rem' }}>Register</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            ref={fullNameRef}
            placeholder="Enter full name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="number"
            ref={phoneRef}
            placeholder="Enter phone number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Register
        </Button>
      </Form>
    </div>
  )
}

export default Register
