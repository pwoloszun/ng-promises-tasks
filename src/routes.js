App.config([
  "$stateProvider",
  "$urlRouterProvider",
  "routeStates",
  function ($stateProvider, $urlRouterProvider, routeStates) {
    var ALL_STATES = _(routeStates);

    $urlRouterProvider.otherwise("/" + ALL_STATES.first());

    ALL_STATES.each(function (state) {
      $stateProvider.state(state, {
        url: "/" + state,
        templateUrl: "src/" + state + "/" + state + "-page.html",
        controller: _(state).classify() + "PageController"
      });
    });


  }
]);
