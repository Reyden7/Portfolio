import './App.css';
import './home.css';
import Home from './components/home';
import {Routes, Route} from 'react-router-dom';
import Projets from './components/projets';
import Competences from './components/competences';
import Hobbie from './components/hobbie'
import Contact from './components/contact';


function App ()	{

{
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/menu" element={<Home/>} ></Route>
      <Route path="/competences" element={<Competences/>} ></Route>
      <Route path="/hobbie" element={<Hobbie/>}> </Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route  path="*" element={<Home/>} />
    </Routes>
  )
}
}



export default App;
