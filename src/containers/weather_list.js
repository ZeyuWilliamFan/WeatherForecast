import React, { Component } from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {

    const tempsK = cityData.list.map(weather =>weather.main.temp);
    const temps = tempsK.map(tempInK => tempInK - 273)

    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    const { lon, lat } = cityData.city.coord;


    return (
      <tr key={cityData.city.id}>
        <td className= "gmap">
          <GoogleMap lon={lon} lat={lat}/>
          {cityData.city.name}
        </td>
        <td className="temp">
          <Chart data={temps} color="orange" units="C" />
        </td>
        <td className="pressure">
          <Chart data={pressures} color="green" units="hPa"/>
        </td>
        <td className="humidity">
          <Chart data={humidities} color="blue" units="%"/>
        </td>
      </tr>
    )

  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{"width":"25%"}} >City</th>
            <th className="temp" style={{"width":"25%"}} >Temperature (C)</th>
            <th className="pressure" style={{"width":"25%"}} >Pressure (hPa)</th>
            <th className="humidity" style={{"width":"25%"}} >Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    );
  }
}


function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList)
