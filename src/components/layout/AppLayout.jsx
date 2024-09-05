import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import Loading from '../UI/Loading'

const AppLayout = () => {
  const navigation = useNavigation()

  if (navigation.state === "loading") return <Loading />

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout