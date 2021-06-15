import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
       <div>
       <Navbar />
        <Wrapper>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/savedbooks" component={SavedBooks} />
          {/* <Route exact path="/search" component={SearchBooks} /> */}
        </Wrapper>
        <Footer />

       </div>
    </Router>
  );
}

export default App;
