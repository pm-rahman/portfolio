import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Aos from 'aos'

function App() {
  Aos.init({
    duration: 700,
    easing:"ease-in-out"
  })

  return (
    <div data-aos="slide-down"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
      className='flex flex-col min-h-screen max-w-[1600px] mx-auto'
    >
      <Navbar />
      <div className='px-4 md:px-8 lg:px-16'>
        <Outlet />
      </div>
      <div className='mt-auto px-4 md:px-8 lg:px-16'>
        <Footer />
      </div>
    </div>
  )
}

export default App
