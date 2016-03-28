import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js';
import GoogleMap from '../components/google-map.js';


class WeatherList extends Component{
  renderWeather(cityData){
      const cityName = cityData.data.city.name;
      /*let temps = [];
      for(var i=0; i < 14; i++){
        temps.push(cityData.data.list[i].main.temp);
      }*/
      const temps = cityData.data.list.map(weather=>weather.main.temp - 273.15);
      const pressure = cityData.data.list.map(weather=>weather.main.pressure || 0);
      const humidity = cityData.data.list.map(weather=>weather.main.humidity || 0);
      //const lon = cityData.data.city.coord.lat;
      //const lat = cityData.data.city.coord.lon;
      //above is same as es6 destructured
      const {lon, lat } = cityData.data.city.coord;
      return(
          <tr key={`city-${cityName}`}>
            <td><GoogleMap lon={lon} lat={lat} /> </td>
            <td><Chart data={temps} units="C"/></td>
            <td><Chart data={pressure} units="hPa" color="blue" /></td>
            <td><Chart data={humidity} units="%" color="orange" /></td>
          </tr>
      );
  }

  render(){
    console.log(this.props.weather);
    return(
        <table className="table table-hover">
          <thead>
            <tr>
                <th>City</th>
                <th>Temperature(C)</th>
                <th>Pressure(hPa)</th>
                <th>Humidity(%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
    );
  }
}

function mapStateToProps({weather}){
   return { weather }; // {weather} == {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
