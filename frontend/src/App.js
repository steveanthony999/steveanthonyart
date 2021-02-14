import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

// Components
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={LandingScreen} />
          <Route path='/shop' component={HomeScreen} />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
