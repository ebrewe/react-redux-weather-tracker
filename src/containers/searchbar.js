import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Searchbar extends Component{
  constructor(props){
      super(props);

      this.state = {
        term: ''
      }

      //can also put here:
      //this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this); 
  }

  onInputChange(e){
      this.setState({term: e.target.value})
  }

  onFormSubmit(e){
    e.preventDefault();

    //use our fetch action
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render(){
    return(
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            placeholder="Get a 5-day forecast from your favorite cities"
            value={this.state.term}
            className="form-control"
            onChange={this.onInputChange.bind(this)}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Search</button>
          </span>
        </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

//below, null is for mapStateToProps
export default connect(null, mapDispatchToProps)(Searchbar);
