import React from 'react';
import WeatherConditions from './WeatherConditions'

const WeatherReport = props => {
	const city = props.weather.report.name
	const temp = Math.round(props.weather.report.main.temp)
	const humidity = Math.round(props.weather.report.main.humidity)

	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
			{
				props
				?
				(
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in {city} is {temp} &deg; C right now, with a humidity of {humidity} %.</h5>
					<WeatherConditions conditions={props.weather.report.weather}/>
				</div>
				)
				: ''
			}

			</div>
		</div>
	)
}

export default WeatherReport;
