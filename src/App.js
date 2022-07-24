import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Wheels from './pages/Wheels';
import Cars from './pages/Cars';
import Showcase from './components/Showcase';
import Garage from './pages/Garage';


import Datepicker from './components/Datepicker';



import { Route } from 'react-router-dom'
import Features from './components/Features';



function App() {
  return (
    
   
      <div className='App'>
        <Navbar />
       
        <main>
        <Route path="/home">
        
        <Home />
        
        <Datepicker />
        <div className='mx-24'>
        <Features />
        
        <Showcase />
        </div>
        
        </Route>
        <Route path="/signin">
        <Signin />
        </Route>
        <Route path="/signup">
        <Signup />
        </Route>
        <Route exact path="/about">
        <About />
        </Route>
        <Route exact path="/book">
        <Wheels />
        </Route>
        <Route exact path="/cars">
        <Cars />
        </Route>
        <Route exact path="/garage">
        <Garage />
        </Route>
        
        
        </main>
        
    </div>

  );
    
}

export default App;
