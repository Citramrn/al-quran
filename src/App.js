import { BrowserRouter as Router, Route } from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword';
import Home from './Components/Pages/Home';
import './styles/index.css';
import Login from './Components/Login';
import Registrasi from './Components/Registrasi';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Surat from './Components/Component/AyahList';


function App() {
  return (
    <Router>
      <Route path={["/home", "/"]} exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registrasi" component={Registrasi} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/surat/:id" component={Surat} />
    </Router>
  );
}

export default App;
