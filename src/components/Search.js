import React, {Component} from 'react';

class Search extends Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Cari disini..." onChange={this.props.handleChange}/>
        </form>
      )
    }
}

export default Search;
