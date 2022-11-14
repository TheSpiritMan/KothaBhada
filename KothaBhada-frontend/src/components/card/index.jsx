import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

const RoomCard = ({ data }) => {
  return (
    <Link href={`/room/${data.pid}`}>
      <Card>
        <Card.Img
          style={{ height: '10rem', objectFit: 'cover' }}
          variant="top"
          src={`data:image/png;base64,${data.image}`}
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>Price: Rs.{data.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RoomCard
