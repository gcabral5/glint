import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';
import SearchResult from './SearchResult';
import Jkeywords from './Jkeywords';
import MainTitle from './MainTitle';
import diamond from '../../public/diamond.png';
import Jtype from './Jtype';
import Jstyle from './Jstyle';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchval: '',
      searchres: [{
            mainImage: "http://pre01.deviantart.net/168c/th/pre/i/2015/300/e/7/derp_face_by_cherryblossomcake-d9ekfoc.png",
            desc: "-",
            price: "-",
            title: "-",
            durl: "http://www.urbandictionary.com/define.php?term=derp"
      }]
    }
  }

  handleChange(e) {
    this.setState({searchval: e.target.value})
    console.log(this.state.searchval)
  }

  renderResult(){
    if (!this.state.searchres) {
      return <p> Loading... </p>
    } else {
    return this.state.searchres((item, index) => {
      return (
        <p key={index}> {item.title} </p>
      )})
  }
}

  parseThing(data) {
  const pdata = JSON.parse(data)
  const nArr = [];

  for(var i = 0; i < pdata.length; i++) {
    let mainImage = pdata[i].MainImage.url_fullxfull;
    let descd = pdata[i].description
    let descr = descd.replace(/&quot;/g,"\"");
    let desc = descr.replace(/&#39;/g,"'");
    let price = pdata[i].price;
    let titled = pdata[i].title;
    let titler = titled.replace(/&quot;/g,"\"");
    let title = titler.replace(/&#39;/g,"'");;
    let durl = pdata[i].url;

    let Item = {
      mainImage,
      desc,
      price,
      title,
      durl
    }

    nArr.push(Item);
   }

  console.log("after loop", pdata);

  this.setState({
    searchres: nArr
  })
  }



  getList(e) {
    e.preventDefault();

    const searchval = this.state.searchval;
    const murl = 'http://localhost:9000/text='+searchval;
    Axios.get(murl)
    .then((res)=>{
      const rdata = JSON.stringify(res.data.results)
      console.log("Call was successful!", typeof(res.data.results));
      this.parseThing(rdata);
      console.log(typeof(rdata), rdata)
    })
    .catch((err)=>{
      console.log("Error in call: ", err)
    })
  }

  hideRes(){
    const res = document.querySelector('.resultItems');
    res.classList.toggle('showri');
  }

  hideKey(){
    const keyz = document.querySelector('.jkeywords');
    keyz.classList.toggle('showjk');
  }

  runThis(item) {
    const newitem= item.target.id;
    const oldval = this.state.searchval;
    if(!oldval) {
    const newarr = oldval.concat(newitem);
    this.setState({
      searchval: newarr
    })
    } else {
    const newarr2 = oldval.concat(','+newitem);
    this.setState({
      searchval: newarr2
    })
  }
  }


  render() {

    return (
      <div className="App">
      <div className="main">
        <div className="searchform">
        <h4>Enter your own keywords (by comma)</h4>
        <form onSubmit={(e)=>{this.getList(e)}}>
        <input type="text" value={this.state.searchval} onChange={(e)=>{this.handleChange(e)}}/>
        <button type="submit"> Search </button>
        </form>
        </div>
        <div className="options">
        <Jtype runThis={this.runThis.bind(this)}/>

        <Jstyle runThis={this.runThis.bind(this)}/>
        </div>
        <MainTitle  />

        <div className="allresults">
        <h1>Now Available at <a href="https://www.etsy.com" target="_blank">Etsy</a></h1>
        <h4 onClick={()=>{this.hideRes()}}>SHOW/HIDE</h4>
        <SearchResult list={this.state.searchres} />
        </div>

        </div>
        <div className="keydiv">
        <img src={diamond} className="diamond" alt="" onClick={()=>{this.hideKey()}}/>
        <Jkeywords keys={this.state.searchval}/>
        </div>

      </div>
    );
  }
}

export default App;
