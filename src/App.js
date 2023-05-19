import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './data'
import Tech from './components/PioneerCard';
import Pioneer from './components/Pioneer';

function App() {
  
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element = {<Tech/>} />

          <Route
              path="/pioneer/:name"
              element = {<Pioneer />}
            />
          
        </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
