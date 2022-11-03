import { Route, Router } from '@mui/icons-material';
import Home from './home/Home';
import Knowledges from './views/Knowledges';
import Portfolio from './views/Portfolio'
import Slider from './components/Portfolio/Slider'
import Contact from './views/Contact';
import {BarMenuFunction} from './hooks/useMenuActive'
function App() {
  
  return (
    <>
      <BarMenuFunction />
      <Home/>
    </>
  );
}

export default App;
