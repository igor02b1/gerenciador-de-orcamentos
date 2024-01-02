import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';


function App() {
    return (
    <Router>
        <NavBar />

        <p>footer</p>
        <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/newproject" element={<NewProject />} />
        </Routes>
    </Router>
    )
}

export default App;
