import React, { Component } from "react";
import "./Post.css";
import "./AvatarSmall"
import AvatarSmall from "./AvatarSmall";
import chatBubble from "./vectorcevtor.svg";
import SaveIcon from "./image2vector.svg";
import Comment from"../comments/comments.js";
import Username from "./AvatarSmall";


class Post extends Component {
    render() {
      return (
       <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <AvatarSmall />
                <div className="Post-user-nickname">
                  
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
              </div>
            </div>
            <div className="Actions-bar">
              <div className="Actions-right">
                <i id="likeButton" className="far fa-heart"></i>
                <img className="Comment" src={chatBubble} alt="i" />
                <i id="Share" className="far fa-paper-plane"></i>
                {/* <img className="Save" src={SaveIcon} alt="i" /> */}
              </div>
            </div>
            <div className="Post-caption">

              <AvatarSmall />
              <Username />

              <div className="Caption">
              
               Moving the community!
              </div>
            </div>
            <div className="Comments">
              <strong>bestliverpoolphoto</strong> Great Photo!
            </div>
            <div className="Comments">
            <strong>codenation</strong> I love the concentration in the room!
            
          </div>
          <Comment />
        </article>
         
      )}
    }

    class Counter extends React.Component {
      state = {
        count: 83
      };
      oneUp = () => {
        this.setState((prevState, { count }) => ({
          count: prevState.count + 1
        }));
      };
    
      oneDown = () => {
        this.setState((prevState, { count }) => ({
          count: prevState.count - 1
        }));
      };
    }
      
export default Post;