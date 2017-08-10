import React, { Component } from 'react';
import './App.css';

import CommentCard from './comments/CommentCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="comment-list">
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
        </div>
      </div>
    );
  }
}

export default App;
