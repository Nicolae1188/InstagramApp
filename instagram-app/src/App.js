import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
       <div>
          <Post />
        <div>
        <Footer />
           </div>
         </div>
      </div>
      
    );
  }
}
export default App;