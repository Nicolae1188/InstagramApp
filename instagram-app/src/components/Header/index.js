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
                      <div className="left">
                        <div className="Nav-brand-logo" href="/">
                            Instagram

                        </div>
                      </div>
                      <div className="right">
                        <img className="logos" src={Compass} />
                        <img className="logos" src={lilheart} />
                        <img className="logos" src={lilMan} />
                      </div>

                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Header;