import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { axiosInstance } from '../../services/axios'
import RoomCard from '../card'
import Loader from '../spinner'

const BuildingsList = () => {
  const [buildings, setBuildings] = useState([])
  useEffect(() => {
    axiosInstance
      .get('/getPostByType/building')
      .then((res) => setBuildings(res?.data))
  }, [])

  if (buildings?.length === 0) {
    return <Loader />
  }

  return (
    <div style={{ margin: '2rem 0' }}>
      <h2>Buildings List</h2>
      <div className="flex-items-list">
        {buildings?.map((data) => (
          <RoomCard data={data} key={data.pid} />
        ))}
      </div>
    </div>
  )
}

export default BuildingsList
