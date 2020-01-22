import React, { Component } from "react";

class Image extends Component {
    viewSelectedImage = () => {
        this.props.viewImage(this.props.imageDetails);
    }
    render() {
        return (
            <div class="ui link cards" onClick={this.viewSelectedImage}>
                <div class="card">
                    <div class="image">
                        <img alt={this.props.imageDetails.description}
                            src={this.props.imageDetails.urls.thumb} />
                    </div>
                    <div class="content">
                        <div class="description">{this.props.imageDetails.alt_description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;