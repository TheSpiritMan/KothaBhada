import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loader
