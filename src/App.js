import './App.css';

//Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
