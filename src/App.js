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
       <Route exact path='/' element={<News key='general' category='general'/>}/>
       <Route exact path='/general' element={<News key='general' category='general'/>}/>
       <Route exact path='/sports' element={<News key='sports' category='sports'/>}/>
       <Route exact path='/science' element={<News key='science' category='science'/>}/>
       <Route exact path='/health' element={<News key='health' category='health'/>}/>
       <Route exact path='/business' element={<News key='business' category='business'/>}/>
       <Route exact path='/entertainment' element={<News key='entertainment' category='entertainment'/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
