App.directive("rmTimeGame", [
  "timeGame",
  function (timeGame) {
    return {
      scope: {},
      templateUrl: "src/time-game/rm-time-game.directive.html",
      link: function (scope, element) {
        scope.status = "NOT PLAYED";
        //TODO
      }
    };
  }
]);
