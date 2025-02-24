import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, sou <br />
            <span>João Victor Pinheiro Reis</span> <br />
            Dev Full Stack
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre mim
          </button>
        </div>
        <figure>
          <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
        </figure>
      </section>
      <Footer />
      <h1>João Victor Pinheiro Reis</h1>
    </>
  )
}

export default App