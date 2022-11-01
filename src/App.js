import { Route, Router } from '@mui/icons-material';
import Home from './home/Home';
import Knowledges from './views/Knowledges';
import Portfolio from './views/Portfolio'
import {BarMenuFunction} from './hooks/useMenuActive'
function App() {
  
  return (
    <>
      <BarMenuFunction />
      <Portfolio/>    
    </>
  );
}

export default App;
