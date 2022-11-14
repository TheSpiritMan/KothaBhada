import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import '../../styles/globals.css'
import { AppProvider } from '../components/context'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </AppProvider>
  )
}

export default MyApp
