import React,{Component} from 'react';
import Image from "./Image"

class ImageList extends Component {
    render() {
        let images =  this.props.images.map( item => {
            return <Image key={item.id} viewImage={this.props.viewImage} imageDetails={item}/>;
        });
        return images;
    }
}

export default ImageList;