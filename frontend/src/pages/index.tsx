import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar/'

export default function Home() {
  return (
    <>
      <Head>
        <title>DSVendas | Home</title>
      </Head>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
        <h1 className="display-4">
          DSVendas
        </h1>
        <p className="lead">
          Analise o desempenho das suas vendas por diferentes perspectivas
        </p>
        <hr/>
        <p>
          Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.
        </p>

        <Link href="/dashboard">
          <a className="btn btn-primary btn-lg" role="button">
            Acessar Dashboard
          </a>
        </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
