import { Link } from 'react-router-dom';

import atradiusLogo from '../../assets/atradius.png';
import './Home.css';

function Home() {
    return (
        <>
            <div>
                <Link to="/user">
                    <nav target="_blank">
                        <img src={atradiusLogo} className="logo" alt="atradius logo" />
                    </nav>
                </Link>
            </div>
            <h1> Hello Atradius</h1>
            <Link to="/user">
                <p className="read-the-docs">{'Click on Atradius logo or here to go to user view ->'}</p>
            </Link>
        </>
    );
}

export default Home;
