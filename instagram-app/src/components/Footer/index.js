import React from 'react';
import "./Footer.css";
import home from './home-solid.svg';
import search from './search-solid.svg';
import add from './plus-square-regular.svg';
import like from './heart-regular.svg';
import acc from './user-regular.svg';


class Footer extends React.Component {
    render(){
        return (
           <footer className="Footer">
              <div className="Footer-icons">
              <img src={home} alt="home"></img>
              <img src={search} alt="search"></img>
              <img src={add} alt="add"></img>
              <img src={like} alt="like"></img>
              <img src={acc} alt="acc"></img>
              </div>
           </footer>
        )
    }
}


export default Footer;