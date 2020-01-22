import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import unsplash from "./api/api";
import Viewer from "./components/viewer";

class App extends Component {
	state = { images: [], selectedImage: "", imageDescription: "" };
	onSearchHandler = async (searchTerm) => {
		console.log("searchTerm :: " + searchTerm);
		const response = await unsplash.get('/search/photos', {
			params: { query: searchTerm }
		});
		this.setState({ images: response.data.results });
		this.setState({ selectedImage: "" });
		this.setState({ imageDescription: "" });
	}
	viewImage = (image) => {
		console.log("APP image :: %o",  image);
		this.setState({selectedImage:image.urls.regular});
	}
	render() {
		return (
			<div className="ui raised very padded text container segment">
				<div className="ui grid">
					<div className="row">
						<div className="ten wide column">
							<SearchBar searchCallBak={this.onSearchHandler} />
						</div>
					</div>
					<div className="row">
						<div className="ten wide column">
							<Viewer imageDescription={this.state.imageDescription} 
							selectedImage={this.state.selectedImage} />
						</div>
						<div className="six wide column">
							<div> <ImageList images={this.state.images} viewImage={this.viewImage}/></div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
