import React from 'react';

class SearchBar extends React.Component {
	state = { searchTerm: "" };

	onSearchChange = (event) => {
		this.setState({ searchTerm: event.target.value });
	};

	onSearchFormSubmit = (event) => {
		event.preventDefault();
		this.props.searchCallBak(this.state.searchTerm);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onSearchFormSubmit} >
					<div>
						<input value={this.state.searchTerm} onChange={this.onSearchChange} type="text" />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
