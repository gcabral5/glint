import React, {Component} from 'react';
import bracelet from '../../public/bracelet.png'
import earrings from '../../public/earrings.png'
import hair from '../../public/hair.png'
import necklace from '../../public/necklace.png'
import ring from '../../public/ring.png'
import watch from '../../public/watch.png'


class Jtype extends Component {


  render(){
    return (
        <div className="jtype">
          <div className="catrow">
          <img src={ring} alt={ring} data-myvalue="ring" className="iconimg" onClick={(e)=>{this.props.conCa(e)}}/>
          <img src={watch} alt={watch} value="watch" className="iconimg"/>
          </div>

          <div className="catrow">
          <img src={earrings} alt={earrings} value="earrings" className="iconimg"/>
          <div className="categoryo">
          <div className="categoryi"><p className="cattitle">Type</p></div>
          </div>
          <img src={necklace} alt={necklace} value="necklace" className="iconimg"/>
          </div>

          <div className="catrow">
          <img src={bracelet} alt={bracelet} value="bracelet" className="iconimg"/>
          <img src={hair} alt={hair} value="hair" className="iconimg"/>
          </div>
        </div>
      )
}
}

export default Jtype;

