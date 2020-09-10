const express = require('express')
const app = express()
const fileHandler = require('fs');

const fetch = require('node-fetch');
const bodyParser = require('body-parser');


const helmet = require("helmet");



app.use(helmet());




app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())


/*this uses the itunes search api */



app.get("/search/:query/:entity", (req, res) => {

  const query = req.params.query; // return query from userinput
  const entity = req.params.entity; // return category from userinput




  const itunes = `https://itunes.apple.com/search?term=${query}&entity=${entity}&limit=8`;
  fetch(itunes)
    .then(response => response.json())
    .then(data => {

      console.log(query)
      if (data.resultCount === 1) {
        console.log(data.resultCount)
        res.send({


          "resultAmount": data.resultCount,
          "artistName1": data.results[0].artistName,
          "trackName1": data.results[0].trackName,
          "artworkUrl601": data.results[0].artworkUrl100

        });
      } else if (data.resultCount === 2) {
        console.log(data.resultCount)
        res.send({

          "resultAmount": data.resultCount,
          "artistName1": data.results[0].artistName,
          "trackName1": data.results[0].trackName,
          "artworkUrl601": data.results[0].artworkUrl100,


          "artistName2": data.results[1].artistName,
          "trackName2": data.results[1].trackName,
          "artworkUrl602": data.results[1].artworkUrl100
        });
      } else if (data.resultCount === 3) {
        console.log(data.resultCount)
        res.send({

          "resultAmount": data.resultCount,
          "artistName1": data.results[0].artistName,
          "trackName1": data.results[0].trackName,
          "artworkUrl601": data.results[0].artworkUrl100,


          "artistName2": data.results[1].artistName,
          "trackName2": data.results[1].trackName,
          "artworkUrl602": data.results[1].artworkUrl100,

          "artistName3": data.results[2].artistName,
          "trackName3": data.results[2].trackName,
          "artworkUrl603": data.results[2].artworkUrl100
        });

      } else if (data.resultCount === 4) {
        console.log(data.resultCount)
        res.send({

          "resultAmount": data.resultCount,
          "artistName1": data.results[0].artistName,
          "trackName1": data.results[0].trackName,
          "artworkUrl601": data.results[0].artworkUrl100,


          "artistName2": data.results[1].artistName,
          "trackName2": data.results[1].trackName,
          "artworkUrl602": data.results[1].artworkUrl100,

          "artistName3": data.results[2].artistName,
          "trackName3": data.results[2].trackName,
          "artworkUrl603": data.results[2].artworkUrl100,

          "artistName4": data.results[3].artistName,
          "trackName4": data.results[3].trackName,
          "artworkUrl604": data.results[3].artworkUrl100
        });
      } else if (data.resultCount === 5) {
        console.log(data.resultCount)
        res.send({

          "resultAmount": data.resultCount,
          "artistName1": data.results[0].artistName,
          "trackName1": data.results[0].trackName,
          "artworkUrl601": data.results[0].artworkUrl100,


          "artistName2": data.results[1].artistName,
          "trackName2": data.results[1].trackName,
          "artworkUrl602": data.results[1].artworkUrl100,

          "artistName3": data.results[2].artistName,
          "trackName3": data.results[2].trackName,
          "artworkUrl603": data.results[2].artworkUrl100,

          "artistName4": data.results[3].artistName,
          "trackName4": data.results[3].trackName,
          "artworkUrl604": data.results[3].artworkUrl100,

          "artistName4": data.results[4].artistName,
          "trackName4": data.results[4].trackName,
          "artworkUrl604": data.results[4].artworkUrl100
        });
      } else if (data.resultCount === 6) {

        console.log(data.resultCount)
        res.send({

          "resultAmount": data.resultCount,
          "artistName1": data.results[0].artistName,
          "trackName1": data.results[0].trackName,
          "artworkUrl601": data.results[0].artworkUrl100,


          "artistName2": data.results[1].artistName,
          "trackName2": data.results[1].trackName,
          "artworkUrl602": data.results[1].artworkUrl60,

          "artistName3": data.results[2].artistName,
          "trackName3": data.results[2].trackName,
          "artworkUrl603": data.results[2].artworkUrl100,

          "artistName4": data.results[3].artistName,
          "trackName4": data.results[3].trackName,
          "artworkUrl604": data.results[3].artworkUrl100,

          "artistName5": data.results[4].artistName,
          "trackName5": data.results[4].trackName,
          "artworkUrl605": data.results[4].artworkUrl100,

          "artistName6": data.results[5].artistName,
          "trackName6": data.results[5].trackName,
          "artworkUrl606": data.results[5].artworkUrl100
        });
      } else if (data.resultCount === 7) {
        console.log(data.resultCount)
        res.send({

          "resultAmount": data.resultCount,
          "artistName1": data.results[0].artistName,
          "trackName1": data.results[0].trackName,
          "artworkUrl601": data.results[0].artworkUrl100,


          "artistName2": data.results[1].artistName,
          "trackName2": data.results[1].trackName,
          "artworkUrl602": data.results[1].artworkUrl100,

          "artistName3": data.results[2].artistName,
          "trackName3": data.results[2].trackName,
          "artworkUrl603": data.results[2].artworkUrl100,

          "artistName4": data.results[3].artistName,
          "trackName4": data.results[3].trackName,
          "artworkUrl604": data.results[3].artworkUrl100,

          "artistName5": data.results[4].artistName,
          "trackName5": data.results[4].trackName,
          "artworkUrl605": data.results[4].artworkUrl100,

          "artistName6": data.results[5].artistName,
          "trackName6": data.results[5].trackName,
          "artworkUrl606": data.results[5].artworkUrl100,

          "artistName7": data.results[6].artistName,
          "trackName7": data.results[6].trackName,
          "artworkUrl607": data.results[6].artworkUrl100
        });
      } else if (data.resultCount === 8) {
        console.log(data.resultCount)

        res.send({

          "resultAmount": data.resultCount,
          "artistName1": data.results[0].artistName,
          "trackName1": data.results[0].trackName,
          "artworkUrl601": data.results[0].artworkUrl100,


          "artistName2": data.results[1].artistName,
          "trackName2": data.results[1].trackName,
          "artworkUrl602": data.results[1].artworkUrl100,

          "artistName3": data.results[2].artistName,
          "trackName3": data.results[2].trackName,
          "artworkUrl603": data.results[2].artworkUrl100,

          "artistName4": data.results[3].artistName,
          "trackName4": data.results[3].trackName,
          "artworkUrl604": data.results[3].artworkUrl100,

          "artistName5": data.results[4].artistName,
          "trackName5": data.results[4].trackName,
          "artworkUrl605": data.results[4].artworkUrl100,

          "artistName6": data.results[5].artistName,
          "trackName6": data.results[5].trackName,
          "artworkUrl606": data.results[5].artworkUrl100,

          "artistName7": data.results[6].artistName,
          "trackName7": data.results[6].trackName,
          "artworkUrl607": data.results[6].artworkUrl100,

          "artistName8": data.results[7].artistName,
          "trackName8": data.results[7].trackName,
          "artworkUrl608": data.results[7].artworkUrl100


        });

      }
    })
    .catch(err => console.log("error on search"))
})





app.use(function(err, req, res, next) {
  console.log(err.stack)
  res.status(500).send('Something broke!')
})


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
