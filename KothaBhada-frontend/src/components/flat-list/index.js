import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../services/axios'
import RoomCard from '../card'
import Loader from '../spinner'

const FlatList = () => {
  const [flats, setFlats] = useState([])
  useEffect(() => {
    axiosInstance.get('/getPostByType/flat').then((res) => setFlats(res?.data))
  }, [])

  if (flats?.length === 0) {
    return <Loader />
  }

  return (
    <div style={{ margin: '2rem 0' }}>
      <h2>Flat List</h2>
      <div className="flex-items-list">
        {flats?.map((data) => (
          <RoomCard data={data} key={data.pid} />
        ))}
      </div>
    </div>
  )
}

export default FlatList
