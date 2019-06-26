import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import ImageInCircle from './components/ImageInCircle';

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
        </div>
      </div>
    );
  }
}
export default App;