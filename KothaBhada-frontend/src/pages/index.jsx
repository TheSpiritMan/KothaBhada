import BuildingsList from '../components/buildings-list'
import { useAppContext } from '../components/context'
import FlatList from '../components/flat-list'
import RoomsList from '../components/rooms-list'

export default function Home() {
  const { isAuthenticated } = useAppContext()

  console.log('isAuthenticated', isAuthenticated)

  return (
    <>
      <RoomsList />
      <FlatList />
      <BuildingsList />
    </>
  )
}
