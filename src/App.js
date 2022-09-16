
//import Styles from './App.module.scss';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/home';
import Info from './pages/info';
import {default as DataProvider} from './context/use-data'



function App() {
  return (
    <DataProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Info" element={<Info/>} />
      </Routes>
    </Router>
    </DataProvider>
  );
}

export default App;
