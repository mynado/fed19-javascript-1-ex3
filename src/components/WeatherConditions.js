import React from 'react'

const WeatherConditions = (conditions) => {
	const condition = conditions.conditions.map(condition => {
		return condition.description
	})
	return (
		<div className="mt-3">
			<h6>Current weather is:</h6>
			<p>{condition}</p>
		</div>
	)


}

export default WeatherConditions
