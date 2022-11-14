import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { axiosInstance } from '../services/axios'

const ResetPassword = () => {
  const tokenRef = useRef(null)
  const passwordRef = useRef(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axiosInstance.get('/setNewPassword', {
        params: {
          token: tokenRef.current.value,
          password: passwordRef.current.value,
        },
      })
      window.location.replace('http://localhost:3000/login')
    } catch (err) {
      console.log('err', err.response)
      setError('UEmail doesnot exists.')
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter token</Form.Label>
        <Form.Control
          type="text"
          ref={tokenRef}
          placeholder="Enter token"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter new password</Form.Label>
        <Form.Control
          type="password"
          ref={passwordRef}
          placeholder="Enter new password"
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

export default ResetPassword
