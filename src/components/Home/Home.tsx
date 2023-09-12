import { Link } from 'react-router-dom';

import atradiusLogo from '../../assets/atradius.png';
import './Home.css';

function Home() {
    return (
        <>
            <div className="Home">
                <div>
                    <Link to="/user">
                        <nav target="_blank">
                            <img src={atradiusLogo} className="logo-home" alt="atradius logo" />
                        </nav>
                    </Link>
                </div>
                <h1> Hello Atradius</h1>
                <Link to="/user">
                    <p className="font">{'Click on Atradius logo or here to go to user view ->'}</p>
                </Link>
            </div>
        </>
    );
}

export default Home;
