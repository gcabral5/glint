import React, {Component} from 'react';
import bracelet from '../../public/type/bracelet.png'
import earrings from '../../public/type/earrings.png'
import hair from '../../public/type/hair.png'
import necklace from '../../public/type/necklace.png'
import ring from '../../public/type/ring.png'
import watch from '../../public/type/watch.png'


class Jtype extends Component {


  render(){
    return (
        <div className="jtype">
          <div className="catrow">
          <img src={ring} alt={ring} id="ring" value="ring" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          <img src={watch} alt={watch} id="watch" value="watch" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          </div>

          <div className="catrow">
          <img src={earrings} alt={earrings} id="earrings" value="earrings" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          <div className="categoryo">
          <div className="categoryi"><p className="cattitle">Type</p></div>
          </div>
          <img src={necklace} alt={necklace} id="necklace" value="necklace" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          </div>

          <div className="catrow">
          <img src={bracelet} alt={bracelet} id="bracelet" value="bracelet" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          <img src={hair} alt={hair} id="hair" value="hair" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          </div>
        </div>
      )
}
}

export default Jtype;

