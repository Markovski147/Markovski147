import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import { NAV_ITEMS } from './helpers/navigation';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import CheckoutPage from './pages/CheckoutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="app" content="width=device-width, initial-scale=1.0">
      <NavBar navItems={NAV_ITEMS} />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/products' exact>
          <ProductsPage/>
        </Route>
        <Route path='/products/product'>
          <ProductDetailsPage/>
        </Route>
        <Route path='/checkout'>
          <CheckoutPage/>
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
