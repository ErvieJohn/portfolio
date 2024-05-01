import './App.css';

//Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/portfolio" element={<Home />} />
          <Route exact path="/portfolio/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
