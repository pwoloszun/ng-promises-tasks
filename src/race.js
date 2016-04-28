function startRace() {
  var p = new Promise(function (resolve, reject) {
    // ...
  });

  var routeLength = 1500;
  var p1 = racePromise("bob", routeLength);
  var p2 = racePromise("ed", routeLength);
  var p3 = racePromise("kate", routeLength);

  Promise.race([p1, p2, p3]).then(function (data) {
    data === {time: 3820, distance: 1509, name: "bob"}
    console.log("WINNER:", data);
  });


  Promise.all([p1, p2, p3]).then(function (results) {
    console.log("Final Results:", results);
  });
}

// startRace();