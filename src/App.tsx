import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.tsx';
import User from './components/User/User.tsx';
import NotFound from './components/NotFound.tsx';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
