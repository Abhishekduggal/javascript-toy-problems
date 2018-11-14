var names = ["Alexandria", "Matthew", "Joe"];

names.every(function(name) {
  return name.length > 4;
});

names.some(function(name) {
  return name.length > 4;
});

var requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" }
];

var inProgress;

inProgress = requests.some(function(request) {
  return request.status === "pending";
});

// Balance parnethesis using Reduce Helper function

function checkPattern(str) {
  return !str.split("").reduce(function(acc, char) {
    if (acc < 0) {
      return acc;
    }
    if (acc === "(") {
      return ++acc;
    }
    if (acc === ")") {
      return --acc;
    }

    return acc;
  }, 0);
}
checkPattern("(()((())))");

// Distance Travelled

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function(sum, trip) {
  return sum + trip.distance;
}, 0);

function unique(array) {
  let output = new Set(array);
  console.log(output);
}

unique([1, 1, 2, 3, 4, 4]);
