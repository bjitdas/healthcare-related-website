import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Notfound from './components/Notfound/Notfound';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import Technologies from './components/Technologies/Technologies';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
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
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path='/techonologies'>
            <Technologies></Technologies>
          </Route>
          <PrivateRoute path="/detail/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
