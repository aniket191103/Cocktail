import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
function App() {
  return (
   <div>
    <Router>
      {/* <Navbar /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/about" element={<ProtectedRoute element={<About />} />} />
          <Route path="/cocktail/:id" element={<ProtectedRoute element={<SingleCocktail />} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;