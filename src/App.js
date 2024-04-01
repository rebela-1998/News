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
       <Route path='/' element={<News category='general'/>}/>
       <Route path='/general' element={<News category='general'/>}/>
       <Route path='/health' element={<News category='health'/>}/>
       <Route path='/sports' element={<News category='sports'/>}/>
       <Route path='/science' element={<News category='science'/>}/>
       <Route path='/business' element={<News category='business'/>}/>
       <Route path='/entertainment' element={<News category='entertainment'/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
