import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Routes from './routes';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes />
            </div>
        </BrowserRouter>
    );
}

export default App;
