import React,{Component} from 'react';

class viewer extends Component {
    render() {
        return <img src={this.props.selectedImage} alt={this.props.imageDescription}  />
    }
}

export default viewer;