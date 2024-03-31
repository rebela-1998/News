import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,
         Routes,
        Route} from 'react-router-dom';
import News from './Components/News';

const App=()=> {
  return (
    <>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
       <Route path='/' element={<News/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
