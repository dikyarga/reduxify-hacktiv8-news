import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import List from './components/List'

class App extends Component {
    constructor() {
        super()
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
      axios.get('https://hn.algolia.com/api/v1/search?query=indonesia').then((response) => {
        console.log('response : ', response.data.hits);
        self.setState({
          data: response.data.hits
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
                    <List handleSearch={this.state.query} data={this.state.data} />

                </div>
            </div>
        );
    }
}

export default App;
