const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://nicholas:Nicholas222!@ds263927.mlab.com:63927/match-making",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

const Player = require("./models/player");

setInterval(() => {
  buscar();
}, 3000);

function buscar() {
  var query = Player.find({});
  //parentPort.postMessage({ bla: query });
  query.then(
    function(result) {
      console.log(result);
    },
    function(error) {
      console.log(error);
    }
  );
}

//parentPort.postMessage({ bla: "query" });
