import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city &&
                    <div>
                        <p>Place: {this.props.city}, {this.props.country}</p>
                        <p>Temp: {this.props.temp}</p>
                        <p>Pressure: {this.props.pressure}</p>
                        <p>Sunset: {this.props.sunset}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Weather;