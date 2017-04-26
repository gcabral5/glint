import React, {Component} from 'react';
import magical from '../../public/style/magical.png'
import rock from '../../public/style/rock.png'
import chic from '../../public/style/chic.png'
import world from '../../public/style/world.png'
import hipster from '../../public/style/hipster.png'
import sporty from '../../public/style/sporty.png'
class Jstyle extends Component {
  render() {
  return (
      <div className="jstyle">
          <div className="catrow">
          <img src={magical} alt={magical} id="magical" value="magical" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          <img src={rock} alt={rock} id="rock" value="rock" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          </div>

          <div className="catrow">
          <img src={chic} alt={chic} id="chic" value="chic" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          <div className="categoryo">
          <div className="categoryi"><p className="cattitle">Style</p></div>
          </div>
          <img src={world} alt={world} id="world" value="world" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          </div>

          <div className="catrow">
          <img src={hipster} alt={hipster} id="hipster" value="hipster" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          <img src={sporty} alt={sporty} id="sporty" value="sporty" className="iconimg" onClick={(e)=>{this.props.runThis(e)}}/>
          </div>
          </div>
    )
}
}

export default Jstyle;

