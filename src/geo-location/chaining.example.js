function createPromiseThatReturns(value) {
  var promise = $q(function (resolve) {
    setTimeout(function () {
      resolve(value);
    }, 1500)
  });
  return promise;
}

