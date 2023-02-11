import logo from './logo.svg';
import './App.css';
import Home from './Components/HomePage/Home';
import Service from './Components/ServicesPage/Service';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AssessmentPage from './Components/Booking Process/AssessmentPage/AssessmentPage';
import ProposedTherapist from './Components/Booking Process/ProposedTherapists/ProposedTherapist';
import TherapistsProfile from './Components/Booking Process/TharapistsProfile/TherapistsProfile';
import PaymentPage from './Components/Booking Process/PaymentPage/PaymentPage';
import BookingSummary from './Components/Booking Process/BookingSummary/BookingSummary';
import Login from './Components/Account/Login';
import SignUp from './Components/Account/SignUp';
import LoggedIn from './Components/Account/LoggedIn/LoggedIn';

function App() {
  return (
    <>
       <Router>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/services' element={<Service />} />
    <Route exact path='/assessmentPage' element={<AssessmentPage />} />
    <Route exact path='/proposedTherapists' element={<ProposedTherapist />} />
    <Route exact path='/johnMackenzie' element={<TherapistsProfile />} />
    <Route exact path='/paymentPage' element={<PaymentPage />} />
    <Route exact path='/summary' element={<BookingSummary />} />
    <Route exact path='/loggedin' element={<LoggedIn />} />
    <Route exact path='/login' element={<Login />} />
    <Route exact path='/signup' element={<SignUp />} />
    </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
