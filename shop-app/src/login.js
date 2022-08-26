import NavBar from './components/Navbar/Navbar';
import { NAV_ITEMS } from './helpers/navigation';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm'

import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar navItems={NAV_ITEMS} />
      <LoginForm/>
      <Footer/>
    </div>
  );
}

export default App;
