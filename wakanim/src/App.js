import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Auth from './components/Auth';


function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/SignIn" element={<Auth/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
