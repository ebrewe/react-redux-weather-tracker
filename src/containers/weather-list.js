import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js';


class WeatherList extends Component{
  renderWeather(cityData){
      const cityName = cityData.data.city.name;
      /*let temps = [];
      for(var i=0; i < 14; i++){
        temps.push(cityData.data.list[i].main.temp);
      }*/
      const temps = cityData.data.list.map(weather=>weather.main.temp);
      const pressure = cityData.data.list.map(weather=>weather.main.pressure || 0);
      const humidity = cityData.data.list.map(weather=>weather.main.humidity || 0);
      console.log(temps);
      console.log('humidity', humidity)
      return(
          <tr key={`city-${cityName}`}>
            <td>{cityName}</td>
            <td><Chart data={temps} /></td>
            <td><Chart data={pressure} color="blue" /></td>
            <td><Chart data={humidity} color="orange" /></td>
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
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
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
