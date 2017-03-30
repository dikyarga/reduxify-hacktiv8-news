import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../logo.svg';
import '../App.css';
import Search from '../components/Search'
import PeopleList from '../components/PeopleList'

// import consumeApiHelper from '../helpers/consumeAPI'

class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            query: ''
        }
    }

    searchNews(event) {
        this.setState({query: event.target.value})
    }

    componentDidMount(){
      let self = this
      axios.get('http://swapi.co/api/people/').then((response) => {
        console.log('response : ', response.data.results);
        self.props.getPeople(response.data.results)
        self.setState({
          data: response.data.results
        })
        console.log(self.state.data);
      }).catch((error) => {
        console.log(error);
      })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Sugeng rawuh marang React</h2>
                </div>
                <div>
                    <br/>
                    <br/>
                    <nav>
                      <Link to="/">News </Link> |
                      <Link to="/people">People </Link>
                    </nav>
                    <Search handleChange={this.searchNews.bind(this)}/>
                    <PeopleList handleSearch={this.state.query} data={this.state.data} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: (result) => dispatch({
      type: 'GET_PEOPLES',
      payload: result
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (People);
