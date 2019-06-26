import React, { Component } from "react";
import "./Post.css";  

class Post extends Component {
    render() {
      return <article className="Post" ref="Post">
          <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src="https://scontent-lht6-1.cdninstagram.com/vp/e2c94cacf60c6511b2cbe1a99999eb28/5DA1F964/t51.2885-19/s320x320/14596696_1806049626330886_8739327968465125376_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com" alt="Chris" />
                </div>
                <div className="Post-user-nickname">
                  <span>Chris</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
              </div>
            </div>
            <div className="Post-caption">
              <strong>Chris</strong> Moving the community!
            </div>
            <div className="Comments">
              <strong>bestliverpoolphoto</strong> Great Photo!
            </div>
            <div className="Comments">
            <strong>codenation</strong> I love the concentration in the room!
            </div>
          </article>;
        }
    }
export default Post;