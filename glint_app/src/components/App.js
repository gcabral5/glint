import React, { Component } from 'react';
import '../App.css';
import Axios from 'axios';
import SearchResult from './SearchResult';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchval: '',
      searchres: [{
            mainImage: "http://pre01.deviantart.net/168c/th/pre/i/2015/300/e/7/derp_face_by_cherryblossomcake-d9ekfoc.png",
            desc: "sample text",
            price: "30.00",
            title: "sample 1",
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
    let desc = pdata[i].description;
    let price = pdata[i].price;
    let title = pdata[i].title;
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

  render() {

    return (
      <div className="App">
        <form onSubmit={(e)=>{this.getList(e)}}>
        <input type="text" value={this.state.searchval} onChange={(e)=>{this.handleChange(e)}}/>
        <button type="submit"> Search </button>
        </form>
        <div className="allresults">
        <SearchResult list={this.state.searchres} />
        </div>
      </div>
    );
  }
}

export default App;
