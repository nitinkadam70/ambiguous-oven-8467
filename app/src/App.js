import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default App