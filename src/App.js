import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './pages/Signin';
import About from './pages/About';

import { Route } from 'react-router-dom'

function App() {
  return (
    
   
      <div className='App'>
        <Navbar />
        <main>
        <Route path="/home">
        <Home />
        </Route>
        <Route path="/signin">
        <Signin />
        </Route>
        <Route exact path="/about">
        <About />
        </Route>

        </main>
        
    </div>

  );
    
}

export default App;
