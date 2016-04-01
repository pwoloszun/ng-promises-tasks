App.factory("openWeather", [
  "$http",
  function ($http) {
    var API_KEY = '6a78596d062df78380eff5944c4e5567';
    var URL = "http://api.openweathermap.org/data/2.5/forecast";
    var COUNTRY_CODE = "pl";

    // TODO
    // var params = {
    //   APPID: API_KEY,
    //   q: "Lublin" + "," + COUNTRY_CODE
    // };

    var openWeather = {
      weather: function (result) {
        // return promise;
      }
    };
    return openWeather;
  }
]);
