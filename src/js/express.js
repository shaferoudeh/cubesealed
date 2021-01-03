//this is the "router file"
// express is the web server/ "web worker"

const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors")

const ApiHelper = require('./apiHelper')

app.use(cors())
app.use(express.static('dist'))
app.get('/', (req, res) => { //root page
    res.sendFile('./dist/index.html', { root: __dirname });
});


app.get('/api/v1/:apiEndpointName', async (req, res) => {

/*    let apiEndpointName = req.params.apiEndpointName

    let apiReponse = await ApiHelper.getResponseForApiRequest( apiEndpointName )


    res.send( apiReponse ) */

    res.send("hellotest")
});

app.listen(port, () => console.log(`listening on port ${port}!`));
