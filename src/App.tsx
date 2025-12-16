import About from "./components/about/About"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Services from "./components/services/Services"
import Footer from "./components/footer/Footer"
import Zap from "./components/zap/Zap"


function App() {
  return (
    <>
      <Header />
      <Home/>
      <Services/>
      <About/>
      <Footer />
      <Zap/>
    </>
  )
}

export default App