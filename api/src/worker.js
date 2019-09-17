const { parentPort } = require("worker_threads");
const Player = require("./models/player");

// function bla() {
//   // var query = Player.find({});
//   // query.then(
//   //   function(result) {
//   //     parentPort.postMessage({ bla: result });
//   //   },
//   //   function(error) {
//   //     parentPort.postMessage({ bla: error });
//   //   }
//   // );
//   parentPort.postMessage({ nbla: "ble" });
//   // var query = workerData.find({});
//   // //parentPort.postMessage({ bla: query });
//   // query.then(
//   //   function(result) {
//   //     parentPort.postMessage({ bla: result });
//   //   },
//   //   function(error) {
//   //     parentPort.postMessage({ bla: error });
//   //   }
//   // );
//   // //parentPort.postMessage({ bla: "query" });
// }

//bla();
parentPort.postMessage({ bla: "ble" });
// setInterval(() => {

// }, 3000);

// // var query = Player.find({});
// // query.then(
// //   function(result) {
// //     parentPort.postMessage({ bla: result });
// //   },
// //   function(error) {
// //     parentPort.postMessage({ bla: error });
// //   }
// // );

// // Player.find({})
// //   .exec()
// //   .then(
// //     function(doc) {
// //       // <- this is the Promise interface.
// //       parentPort.postMessage({ bla: doc });
// //       next();
// //     },
// //     function(err) {
// //       parentPort.postMessage({ bla: err });
// //     }
// //   );

// // function run() {
// //   while (true) {
// //     Player.find({})
// //       .exec()
// //       .then(
// //         function(doc) {
// //           // <- this is the Promise interface.
// //           parentPort.postMessage({ bla: doc });
// //           next();
// //         },
// //         function(err) {
// //           parentPort.postMessage({ bla: err });
// //         }
// //       );

// //     //parentPort.postMessage({ bla: "ble" });
// //     //parentPort.postMessage({ bla: players });

// //     // for (let index = 0; index < players.length; index++) {
// //     //   parentPort.postMessage({ bla: "ble" });

// //     //   const element = players[index];

// //     //   if (players.length - 1 < index) {
// //     //     parentPort.postMessage({
// //     //       playerOne: element,
// //     //       playerTwo: players[index + 1]
// //     //     });
// //     //   }
// //     // }
// //   }
// // }

// // run();
