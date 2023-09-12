import { Result } from '../interface';
import atradiusLogo from '../assets/user.jpg';

export const Card = (user: Result) => {
    const notFound = 'N/A';
    const hobbies = user['hobby'] ? user['hobby'].map(number => <p>{number}</p>) : notFound;
    return (
        <div className="container">
            <div className="center">
                <div className="card">
                    <div className="additional">
                        <div className="user-card">
                            <div className="level center">ID: {user.id}</div>
                            <div className="points center">{user.address.location.company}</div>
                            <div width="110" height="150" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" className="center">
                                <img src={atradiusLogo} className="logo" alt="atradius logo" />
                            </div>
                        </div>
                        <div className="more-info">
                            <h1>
                                {user['first name'] ? user['first name'] : notFound}
                                {'\u00A0'}
                                {user['lastname'] ? user['lastname'] : notFound}
                            </h1>
                            <div className="coords">
                                <span>Username</span>
                                <span>{user.username}</span>
                            </div>
                            <div className="coords">
                                <span>Email</span>
                                <span>{user.email}</span>
                            </div>
                            <div className="coords">
                                <span>zipcode</span>
                                <span>{user.address.zipcode}</span>
                            </div>
                            <div className="stats">
                                <div>
                                    <div className="title">Friendly</div>
                                    <i className="fa fa-trophy"></i>
                                    <div className="value">{user.friendly && <div>&#128512;</div>}</div>
                                    <div className="value">{!user.friendly && <div>&#128528;</div>}</div>
                                </div>
                                <div>
                                    <div className="title">gender</div>
                                    <i className="fa fa-gamepad"></i>
                                    <div className="value">{user.gender}</div>
                                </div>
                                <div>
                                    <div className="title">Age</div>
                                    <i className="fa fa-group"></i>
                                    <div className="value">{user.age}</div>
                                </div>
                                <div>
                                    <div className="title">Coffee</div>
                                    <i className="fa fa-coffee"></i>
                                    <div className="value infinity">∞</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="general">
                        <h1>
                            {user['first name'] ? user['first name'] : notFound}
                            {'\u00A0'}
                            {user['lastname'] ? user['lastname'] : notFound}
                        </h1>
                        <p>{hobbies}</p>
                        <span className="more">Mouse over the card for more info</span>
                    </div>
                </div>
            </div>
        </div>
        // <div className="card">
        //     <p>{user['first name'] ? user['first name'] : notFound}</p>
        //     <p>{user['lastname'] ? user['lastname'] : notFound}</p>
        //     <p>{user.address.zipcode ? user.address.zipcode : notFound}</p>
        //     <p>{user['email'] ? user['email'] : notFound}</p>
        //     <ul>{hobbies}</ul>
        // </div>
    );
};
