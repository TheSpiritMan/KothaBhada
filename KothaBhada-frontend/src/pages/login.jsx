import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { axiosInstance } from '../services/axios'

const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const router = useRouter()

  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axiosInstance
        .post('/user-login', {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((res) => {
          window.localStorage.setItem('access_token', res?.data)
        })
      setError(null)
      window.location.replace('http://localhost:3000')
    } catch (err) {
      console.log('err', err.response)
      setError('Username or password is not correct.')
    }
  }

  return (
    <div
      style={{
        maxWidth: '20rem',
        margin: 'auto',
        paddingTop: '3rem',
        paddingBottom: '10rem',
      }}
    >
      <h3 style={{ marginBottom: '2rem' }}>Login</h3>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
        </Form.Group>

        {error && <p style={{ color: 'red', marginBottom: '2rem' }}>{error}</p>}
        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Login
        </Button>

        <p
          style={{ color: 'darkblue', marginTop: '1rem', cursor: 'pointer' }}
          onClick={() => router.push('/forgot-password')}
        >
          Forgot password?
        </p>
      </Form>
    </div>
  )
}

export default Login
