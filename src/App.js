import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,
         Routes,
        Route} from 'react-router-dom';

const App=()=> {
  return (
    <>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
       <Route path='/' />
       <Route path='/general'/>
       <Route path='/lifestyle'/>
       <Route path='/sports'/>
       <Route path='/world'/>
       <Route path='/local'/>
       <Route path='/entertainment'/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
