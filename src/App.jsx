import './App.css';
import './home.css';
import Home from './components/home';
import {Routes, Route} from 'react-router-dom';
import Projets from './components/projets';
import Competences from './components/competences';
import Hobbie from './components/hobbie'
import Contact from './components/contact';
import Etabs from './components/etabs';
import Revi from './components/revi';
import Vertiscreen from './components/vertiscreen';
import AVenir from './components/a-venir';

function App ()	{
  return (
    <Routes>
      <Route path="reyden7.github.io/Portfolio/" element={<Home/>}></Route>
      <Route path="reyden7.github.io/Portfolio/menu" element={<Home/>} ></Route>
      <Route path="reyden7.github.io/Portfolio/competences" element={<Competences/>} ></Route>
      <Route path="reyden7.github.io/Portfolio/hobbie" element={<Hobbie/>}></Route>
      <Route path="reyden7.github.io/Portfolio/contact" element={<Contact/>}></Route>
      <Route path="reyden7.github.io/Portfolio/etabs" element={<Etabs/>}></Route>
      <Route path="reyden7.github.io/Portfolio/revi" element={<Revi/>}></Route>
      <Route path="reyden7.github.io/Portfolio/vertiscreen" element={<Vertiscreen/>}></Route>
      <Route path="reyden7.github.io/Portfolio/a-venir" element={<AVenir/>}></Route>
      <Route  path="*" element={<Home/>} />
    </Routes>
  )
}

export default App;
