import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useAppContext } from '../../components/context'
import Loader from '../../components/spinner'
import { axiosInstance } from '../../services/axios'

const RoomDetails = () => {
  const { access_token } = useAppContext()
  const router = useRouter()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [sucess, setSuccess] = useState(false)

  console.log('details', data)

  useEffect(() => {
    if (router.query.id) {
      axiosInstance
        .get(`getPost/${router.query.id}`)
        .then((res) => setData(res?.data))
    }
  }, [router.query.id])

  const handleInterested = async (id) => {
    alert('Are You Interested ?')
    try {
      await axiosInstance
        .get('/post/interested', {
          params: {
            pid: id,
          },
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then(() => setSuccess(true))
    } catch (err) {
      setSuccess(false)
      console.log('err', err.response)
      setError('Not Logged In or Something went wrong')
    }
  }

  if (!data) {
    return <Loader />
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        margin: '2rem 0',
        alignItems: 'center',
      }}
    >
      <img
        src={`data:image/png;base64,${data?.image}`}
        style={{ width: '20rem' }}
      />

      <div>
        <h3 style={{ fontWeight: '600', paddingBottom: '1rem' }}>
          {data?.title}
        </h3>
        <p>
          Price:{' '}
          <span style={{ color: 'darkBlue', fontWeight: '600' }}>
            Rs.{data?.price}
          </span>
        </p>
        <p>
          Address:{' '}
          <span style={{ color: 'darkBlue', fontWeight: '600' }}>
            {data.address}
          </span>
        </p>
        <p>
          Type:{' '}
          <span style={{ color: 'darkBlue', fontWeight: '600' }}>
            {data?.type}
          </span>
        </p>

        <p style={{ margin: '2rem 0' }}>{data?.description}</p>

        {sucess && <p>Please, Check Your Mail</p>}
        {error && <p>{error}</p>}

        <Button onClick={() => handleInterested(data.pid)}>Interested</Button>
      </div>
    </div>
  )
}

export default RoomDetails
