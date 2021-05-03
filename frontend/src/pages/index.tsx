import NavBar from '../components/NavBar/'
import Head from 'next/head'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>DSVendas | Home</title>
      </Head>
      <NavBar/>
      <div className="container">
        <h1>
          Hello
        </h1>
      </div>
      <Footer/>
    </>
  )
}
