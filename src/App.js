import {
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom';
import "./App.css";
import Navbar from "./components/inc/Navbar";
import AboutUs from './components/pages/AboutUs';
import Categories from './components/pages/Categories';
import Signup from './components/pages/Signup';
import FutureEditions from './components/pages/FutureEditions';
import Login from './components/pages/Login';
import MakeADonations from './components/pages/MakeADonations';
import PastEditions from './components/pages/PastEditions';
import Footer from './components/inc/Footer'
import Home from './components/pages/Home';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Categories' element={<Categories />} />
        <Route exact path='/Past-editions' element={<PastEditions />} />
        <Route exact path='/Future-editions' element={<FutureEditions />} />
        <Route exact path='/About-Us' element={<AboutUs />} />
        <Route exact path='/Make-a-donation' element={<MakeADonations />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/create-account' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </Router >
  );
}

export default App;


