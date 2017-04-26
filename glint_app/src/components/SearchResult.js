import React, {Component} from 'react';

class SearchRes extends Component {
  renderList() {
    return this.props.list.map((item, index) => {
          return (
          <div className="eachitem" key={index} >
          <a href={item.durl} target="_blank"><img src={item.mainImage} alt="" className="itemimg"/></a>
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <p>{item.desc.substring(0, 200)}<a href={item.durl} target="_blank"> Read More...</a></p>
          <hr/>
        </div>
        )
    })
  }

  render() {
    return (
    <div className="resultItems">
      <ul>
      {this.renderList()}
      </ul>
    </div>
    )
  }
}

export default SearchRes;
