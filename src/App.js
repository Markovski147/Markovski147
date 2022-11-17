import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar.js';
import { NAV_ITEMS } from './helpers/navigation';
import Footer from './components/Footer/Footer.js';
import LoginPage from './pages/LoginPage.js';
import Homepage from './pages/Homepage.js';
import NotFound from './pages/NotFound.js';
import OrderSuccess from './pages/OrderSuccess.js';
import CheckoutPage from './pages/CheckoutPage.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { screenWidth } from './screenWidth.js';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './store/selectors/authSelectors.js';
import AboutUs from './pages/AboutUs.js';

function App() {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="app" width={`${screenWidth}`}>
      <NavBar navItems={NAV_ITEMS} />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/products' exact>
          <ProductsPage />
        </Route>
        <Route path='/product'>
          <ProductDetailsPage />
        </Route>
        <Route path='/checkout'>
          {isLoggedIn ? <CheckoutPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/orderSuccess'>
          {isLoggedIn ? <OrderSuccess /> : <Redirect to='/' />}
        </Route>
        <Route path='/login'>
          {!isLoggedIn ? <LoginPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/about'>
          <AboutUs />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
