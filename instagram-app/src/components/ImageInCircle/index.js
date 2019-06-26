import React from 'react';
import "./ImageInCircle.css";
import { tsPropertySignature } from '@babel/types';

class ImageInCircle extends React.Component {
    state = {
        storyImage: "https://scontent-lht6-1.cdninstagram.com/vp/e2c94cacf60c6511b2cbe1a99999eb28/5DA1F964/t51.2885-19/s320x320/14596696_1806049626330886_8739327968465125376_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
        storyName: "Max"
    }
    render(){
        return (
            <div className="StoriesBar">
                {/* <div className="StoriesBox" > */}
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
            </div>
        );
    }
}

const DisplayStoryCard = props => (
    <div className="StoriesBox" >
        <div className="Circle">
            <img src={props.image} alt="" />
        </div>
        <p>{props.name}</p>
    </div>
)


export default ImageInCircle;

{/* <div className="StoriesBar">
           <div className="StoriesBox" >
               <div className="Circle">
                   <img src=" alt=""/>
               </div>
               <p>name</p>
           </div>
           <div className="StoriesBox" >
               <div className="Circle">
                   <img src=" alt="" />
               </div>
               <p>name</p>
           </div>
       </div> */}