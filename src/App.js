import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import GalleryPage from './pages/galleryPage/gallery'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/gallery" component={GalleryPage} exact />
        </Switch>
      <Footer />
      </Router>
  );
}

export default App;
