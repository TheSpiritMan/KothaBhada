import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../services/axios'
import RoomCard from '../card'
import Loader from '../spinner'
import { useAppContext } from '../context'

const RoomsList = () => {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    axiosInstance
      .get('/getPostByType/room', {})
      .then((res) => setRooms(res?.data))
  }, [])

  if (rooms?.length === 0) {
    return <Loader />
  }

  return (
    <div style={{ margin: '2rem 0' }}>
      <h2>Rooms List</h2>
      <div className="flex-items-list">
        {rooms?.map((data) => (
          <RoomCard data={data} key={data.pid} />
        ))}
      </div>
    </div>
  )
}

export default RoomsList
