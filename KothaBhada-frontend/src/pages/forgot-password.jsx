import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { axiosInstance } from '../services/axios'

const ForgotPassword = () => {
  const emailRef = useRef(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axiosInstance.get('/resetPassword', {
        params: {
          email: emailRef.current.value,
        },
      })
      window.location.replace('http://localhost:3000/reset-password')
    } catch (err) {
      console.log('err', err.response)
      setError('something went wrong.')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter email</Form.Label>
        <Form.Control
          type="email"
          ref={emailRef}
          placeholder="Enter email"
          required
        />
      </Form.Group>

      {error && <p style={{ color: 'red', marginBottom: '2rem' }}>{error}</p>}

      <Button variant="primary" type="submit" style={{ width: '100%' }}>
        Submit
      </Button>
    </Form>
  )
}

export default ForgotPassword
