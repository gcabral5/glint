import React, {Component} from 'react';

class Jkeywords extends Component {
  renderKeys (){
    let karr = this.props.keys.split(",");
    console.log(karr);
    return karr.map((elem, index) => {
      let num= 0
      let ind = "l" + num;
      return (
          <div key={index} className="eachkey">
            <p id={ind}>{elem}</p> <p className="close">X</p>
          </div>
        )
    })

  }

  render() {
    return(
      <div className="jkeywords">
        <h2> Hmm, looks like you're shopping for someone who likes/is: </h2>
        {this.renderKeys()}
      </div>
    )
}
}

export default Jkeywords;

