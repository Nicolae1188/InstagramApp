import React, { Component } from 'react';
import './comments.css';

class CommentMain extends Component {
  constructor() {
    super();
    this.state = {
      commentBoxes: [],
      commentBoxId: 0
    };
  }  
  addNewCommentBox() {
    let newCommentBoxId = this.state.commentBoxId + 1;
    this.setState({commentBoxId: newCommentBoxId});

    let commentBox = <CommentBox key={this.state.commentBoxId}/>
    this.setState({commentBoxes: this.state.commentBoxes.concat(commentBox)});
  }  

  render() {
    return (
      <div>
         {this.state.commentBoxes.map(function(commentBox) {
           return commentBox;
         })}
        <button onClick={this.addNewCommentBox.bind(this)}>Add a comment</button>

      </div>
    );
  }
}


class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentId: 0
    };
  }
  handleOnSubmit(commentText) {
    let newCommentId = this.state.commentId + 1;
    this.setState({commentId: newCommentId});

    let comment = {id:this.state.commentId, author: 'me', text: commentText}
    this.setState({comments: this.state.comments.concat(comment)});
  }
    
  render() {
    return (
      <div >
      <div className="CommentBox">
        <CommentList comments={this.state.comments}/>
        <CommentInput onCommentSubmit={this.handleOnSubmit.bind(this)}/>
      </div>
      </div>
    );
    }

  }

class CommentInput extends Component {

  handleOnSubmit(e) {
    let commentText = this.textInput.value;
    if (commentText) {
      this.props.onCommentSubmit(commentText);
      this.textInput.value = '';
    }
  }
  render() {
    return (
      <div className="CommentInput">
        <input ref={(ref) => this.textInput = ref} type="text"></input>
        <button onClick={this.handleOnSubmit.bind(this)}>Send</button>
      </div>
    );
  }
}
class CommentList extends Component {
  render() {
    let liComments = this.props.comments.map(function(comment) {
                       return <Comment key={comment.id} author={comment.author} text={comment.text}/>;
                     })
    return (
      <div className="Comments">
      
      <ul className="CommentList">
        {liComments}
      </ul>
      </div>
    );
  }
}
class Comment extends Component {
  render() {
    return (
      <li key={this.props.id} className="Comment">
        <strong>{this.props.author}</strong> {this.props.text}
      </li>
    );
  }
}

export default CommentMain;