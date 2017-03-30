import React, {Component} from 'react';

class List extends Component {

    render() {
      let filteredData = this.props.data.filter((x) => {
          let regex = new RegExp(this.props.handleSearch, 'gi')
          return regex.test(x.title)
      })
      return (
        <ul>
            {filteredData.map((item, index) => {
                console.log('isi item : ', item);
                return (
                    <li key={index}><a href={item.url}>{item.title}</a></li>
                )
            })
        }
        </ul>
      )
    }
}

export default List;
