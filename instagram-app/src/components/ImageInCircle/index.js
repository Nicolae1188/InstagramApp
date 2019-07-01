import React from 'react';
import "./ImageInCircle.css";
import "../../App.css";
import { tsPropertySignature } from '@babel/types';
import "../Post/AvatarSmall.css"
import "../Post/AvatarSmall.js"
import AvatarSmall from '../Post/AvatarSmall.js';

class ImageInCircle extends React.Component {
    state = {
        storyImage: "https://scontent-lht6-1.cdninstagram.com/vp/e2c94cacf60c6511b2cbe1a99999eb28/5DA1F964/t51.2885-19/s320x320/14596696_1806049626330886_8739327968465125376_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
        profileImage: "https://scontent-lht6-1.cdninstagram.com/vp/e2c94cacf60c6511b2cbe1a99999eb28/5DA1F964/t51.2885-19/s320x320/14596696_1806049626330886_8739327968465125376_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com",
        storyName: "Max",
        showFullStory: false
    }

    openStory = () => {
        let showState = this.state.showFullStory
        this.setState({ showFullStory: !showState }) //toggle showFullStory
    }

    render(){
        return (
            <div>
                <Story  name={this.state.storyName} 
                        profileImage={this.state.profileImage} 
                        storyImage={this.state.storyImage} 
                        click={this.openStory}
                        toggle={this.state.showFullStory}
                />
            </div>
        );
    }
} //end ImageInCircle

const Story = (props) => {
    return(
    props.toggle    ?   (<DisplayFullStory name={props.name} image={props.storyImage} click={props.click} />)
                    :   (<DisplayStoryCard name={props.name} image={props.profileImage} click={props.click} />)    
    )                             
}

const DisplayCircle = props => {
    return (
        <div className="StoriesBox" >
            <div className="Circle">
                <img src={props.image} alt="DSC" onClick={props.click} /> 
            </div>
        <p>{props.name}</p>
    </div>
    )
}
const DisplayStoryCard = props => {
    return (
        <div className="StoriesBar">
            <DisplayCircle name={props.name} image={props.image} click={props.click}/>
            <DisplayCircle name={props.name} image={props.image} click={props.click}/>
            <DisplayCircle name={props.name} image={props.image} click={props.click}/>
            <DisplayCircle name={props.name} image={props.image} click={props.click}/>
            <DisplayCircle name={props.name} image={props.image} click={props.click}/>
            <DisplayCircle name={props.name} image={props.image} click={props.click}/>

        </div>
    )
}

const DisplayFullStory = props => {
    return (
        <div className="WholeScreen">
        <div className="StoryHeader">
            <AvatarSmall />
        </div>
            <button onClick={props.click}>X</button>   
            <img src={props.image} alt="DFS" />
        </div>
    )
}


export default ImageInCircle;
