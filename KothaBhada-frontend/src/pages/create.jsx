import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAppContext } from '../components/context'
import { axiosInstance } from '../services/axios'

const Create = () => {
  const { access_token } = useAppContext()
  const router = useRouter()
  const titleRef = useRef(null)
  const addressRef = useRef(null)
  const priceRef = useRef(null)
  const descriptionRef = useRef(null)
  const [type, setType] = useState(null)
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData()

    form.append('title', titleRef.current.value)
    form.append('address', addressRef.current.value)
    form.append('price', priceRef.current.value)
    form.append('description', descriptionRef.current.value)
    form.append('type', type)
    form.append('multipartFile', file)

    try {
      await axiosInstance
        .post('/create-post', form, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then(() => {
          router.push('/')
          setError(null)
        })
    } catch (err) {
      console.log('err', err.response)
      setError('Something went wrong')
    }
  }

  return (
    <div
      style={{
        maxWidth: '30rem',
        margin: 'auto',
        paddingTop: '3rem',
        paddingBottom: '10rem',
      }}
    >
      <h3 style={{ marginBottom: '2rem' }}>Create post</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            ref={titleRef}
            placeholder="Enter title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            ref={addressRef}
            placeholder="Enter Address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Type</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Open this select menu</option>
            <option value="room">Room</option>
            <option value="flat">Flat</option>
            <option value="building">Building</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            ref={priceRef}
            placeholder="Enter price"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            ref={descriptionRef}
            placeholder="Enter description"
            style={{ height: '150px' }}
            required
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>

        {error && <p style={{ color: 'red', marginBottom: '2rem' }}>{error}</p>}

        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Create
        </Button>
      </Form>
    </div>
  )
}

export default Create
