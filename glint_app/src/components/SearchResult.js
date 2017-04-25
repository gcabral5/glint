import React, {Component} from 'react';

class SearchRes extends Component {
  renderList() {
    return this.props.list.map((item, index) => {
          return (
          <div className="eachitem" key={index} >
          <a href={item.durl}><img src={item.mainImage} alt="" className="itemimg"/></a>
          <h4>{item.title}</h4>
          <p>Price: ${item.price}</p>
          <p>country: {item.desc}</p>
          <hr/>
        </div>
        )
    })
  }

  render() {
    return (
    <div>
      <ul>
      {this.renderList()}
      </ul>
    </div>
    )
  }
}

export default SearchRes;
