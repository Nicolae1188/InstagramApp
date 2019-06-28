import React from 'react';
import "./Header.css";
import lilMan from "./lilman.png"
import lilheart from "./lilheart.png"
import Compass from "./Compass.png"

class Header extends React.Component {
    render(){
        return (
            <nav className='Nav'>
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <a className="Nav-brand-logo" href="/">
                            Instagram
                        </a>
                        <img src={Compass}></img>
                        <img src={lilheart}></img>
                        <img src={lilMan}></img>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;