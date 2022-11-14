import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../services/axios'
import Loader from '../components/spinner'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useAppContext } from '../components/context'
import Link from 'next/link'
import { Card } from 'react-bootstrap'
import { useRouter } from 'next/router'

const MyPosts = () => {
  const router = useRouter()
  const { access_token } = useAppContext()
  const [error, setError] = useState(null)
  const [rooms, setRooms] = useState([])
  const [reload, setReload] = useState(false)

  console.log('router', router)

  useEffect(() => {
    axiosInstance
      .get('/allMyPost', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => setRooms(res?.data))
  }, [])

  console.log('rooms', rooms)

  const handleDelete = async (id) => {
    // alert('Do you want to delete?')
    try {
      await axiosInstance
        .delete(`/delPost/${id}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then(() => {
          router.reload()
          setError(null)
        })
    } catch (err) {
      console.log('err', err.response)
      setError('Something went wrong')
    }
  }

  return (
    <div style={{ margin: '2rem 0' }}>
      <h2>Post list</h2>
      {rooms?.length === 0 ? (
        <p>No data</p>
      ) : (
        <div className="flex-items-list">
          {rooms?.map((data) => (
            <Card>
              <Link href={`/room/${data.pid}`} key={data.pid}>
                <Card.Img
                  style={{ height: '10rem', objectFit: 'cover' }}
                  variant="top"
                  src={`data:image/png;base64,${data.image}`}
                />
              </Link>
              <Card.Body>
                <Link href={`/room/${data.pid}`} key={data.pid}>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>Price: Rs.{data.price}</Card.Text>
                </Link>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleDelete(data.pid)}
                >
                  <RiDeleteBinLine />
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyPosts
