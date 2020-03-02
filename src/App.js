import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import axios from 'axios';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
		city: '',
	}

	getWeather = (city) => {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`)
		.then(response => {
			this.setState({
				errorMessage: false,
				report: response.data,
				city: city,
			})
		})
		.catch(error => {
			this.setState({
				errorMessage: true,
				report: null,
				city: city,
			})
		});
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity
						onGetWeather={this.getWeather}
						city={this.state.city}
						/>

					{
						this.state.report
						? (
							<WeatherReport
								weather={this.state}
								errorMessage={this.state.errorMessage}
								report={this.state.report}
							/>
						)
						: ''
					}

					{
						this.state.errorMessage
						? (
							<div className="alert alert-warning" role="alert">
								Oops something went wrong! Are you sure '{this.state.city}' exists?
							</div>
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
