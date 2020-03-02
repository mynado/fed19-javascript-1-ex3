import React from 'react';

class SearchCity extends React.Component {
	state = {
		city: '',
		errorMessage: '',
	}

	handleFormSubmit = (e) => {
		e.preventDefault()
		this.props.onGetWeather(this.state.city)
		this.setState({
			city: '',
			errorMessage: false,
		})
	}

	handleInputCityChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		})
	}

	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.handleFormSubmit}>
					<div className="input-group">
						<input
							type="text"
							id="city"
							className="form-control form-control-lg"
							id="city"
							onChange={this.handleInputCityChange}
							value={this.state.city}
							/>

						<div className="input-group-append">
							<button className="btn btn-success btn-lg">Search</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
