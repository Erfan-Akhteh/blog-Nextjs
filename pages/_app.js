import Layout from '../components/Layout'
import Nav from '../components/Nav'
import '../styles/globals.css'

 function App({ Component, pageProps }) {
  return (
    <>
    <Nav/>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
    
    )
}
export default App


