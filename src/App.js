import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path="/shipping">
          <Shipping></Shipping>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path='/details/:userId'>
          <Details></Details>
        </PrivateRoute>
        <Route path="/details">
          <Details></Details>
        </Route>
        <Route  path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
