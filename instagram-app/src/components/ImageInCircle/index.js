import React from 'react';
import "./ImageInCircle.css";
import "../../App.css";
import { tsPropertySignature } from '@babel/types';

class ImageInCircle extends React.Component {
    state = {
        storyImage: "https://scontent-lht6-1.cdninstagram.com/vp/e2c94cacf60c6511b2cbe1a99999eb28/5DA1F964/t51.2885-19/s320x320/14596696_1806049626330886_8739327968465125376_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
        storyName: "Max",
        showFullStory: false
    }

    openStory = () => {
        let showState = this.state.show
        this.setState({ show: !showState })
    }

    render(){
        return (
            <div className="StoriesBar">
                <Story name={this.state.storyName} profileImage={this.state.storyImage} storyImage={this.openStory} />
                    {/* <OpenStoryImg show={this.state.show} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} story={this.openStory} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} />
                    <DisplayStoryCard name={this.state.storyName} image={this.state.storyImage} /> */}
            </div>
        );
    }
} //end ImageInCircle

const Story = () => {
    return (
        <div>
           this.state.showFullStory ? :
            <DisplayStoryCard />
            <OpenStoryImg />
        </div>
    )
}

const DisplayStoryCard = props => (
    <div className="StoriesBox" >
        <div className="Circle">
            <img src={props.image} alt="" onClick={props.story} />
        </div>
        <p>{props.name}</p>
    </div>
)

const OpenStoryImg = ({ show }) => {
    return (
        <div>
            { show && <img className="openStory" src="" />}
        </div>
    )
}


export default ImageInCircle;
