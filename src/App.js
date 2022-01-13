import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/nav';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Assignment from './components/assignment';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route element = {<Home />} path = "/home" />
        <Route element = {<Login />} path = "/login" />
        <Route element = {<Signup />} path = "/signup" />
        <Route element = {<Assignment />} path = "/assignment" />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
