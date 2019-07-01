import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import ImageInCircle from './components/ImageInCircle';
import "./App.css";

class App extends React.Component {
  render() {
    return (

        <div>
          <Header />
          <div>
            <ImageInCircle />
          </div>
          <div>
            <Post />
            <Post />
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