const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch')

// We can use this to defeat cors problems from using two servers
app.use(cors());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/:text", (req, res) => {

    const searchval = req.params.text.slice(5);
    const murl = 'https://openapi.etsy.com/v2/listings/active?api_key=l016cereb6dm18ied0f5pz3c&limit=20&includes=MainImage&category=Jewelry&keywords=' + searchval;

    const renderIt= (data) => {
      return data
    }

    const getit = () => {
    fetch(murl)
    .then((body) => {
        return body.json()
    }).then((json) => {
        console.log("This is inside fetch", json);
        res.json(json);
    })
    .catch((err) => {
        console.log("error in the call:", err)
    })
    }

    console.log(getit())

})



const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
