const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Worker, workerData } = require("worker_threads");

const app = express();

app.use(cors());

const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("connectRoom", summonerName => {
    socket.join(summonerName);
  });
});

mongoose.connect(
  "mongodb://nicholas:Nicholas222!@ds263927.mlab.com:63927/match-making",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

function startWorker(path, cb) {
  const worker = new Worker(path, { workerData: null });
  worker.on("message", msg => {
    console.log(msg);
  });
  worker.on("error", cb);
  worker.on("exit", code => {
    if (code != 0)
      console.error(new Error(`Worker finalizado com exit code = ${code}`));
  });
  return worker;
}

startWorker(
  "/home/nicholas/projetos/matchMaking/api/src/worker.js",
  (err, result) => {
    if (err) return console.error(err);
    console.log("** COMPUTAÇÃO PESADA FINALIZADA **");
    //console.log(`Duração = ${(result.end - result.start) / 1000} segundos`);
  }
);

server.listen(process.env.PORT || "3000");
