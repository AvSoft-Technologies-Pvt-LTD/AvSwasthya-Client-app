import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Calltoaction from './components/Calltoaction';
import Speciality from './components/Speciality';
import Footer from './components/Footer';
import Statusbar from './components/Statusbar';
import WhychooseusSection from './components/WhychooseusSection';

function App() {
  return (
    <div className='w-full h-full bg-gray-50'>
      <Navbar/>
      <Herosection/>
      <Calltoaction/>
      <Statusbar/>
      <Speciality/>
      <WhychooseusSection/>
      <Footer/>
    </div>
  )
}

export default App