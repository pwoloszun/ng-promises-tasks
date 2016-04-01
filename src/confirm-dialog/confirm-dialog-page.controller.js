App.controller("ConfirmDialogPageController", [
  "$scope",
  "confirmDialog",
  function ($scope, confirmDialog) {

    $scope.openConfirm = function () {
      confirmDialog.open("Want some coffee?").then(function () {
        $scope.result = "YES";

      }, function () {
        $scope.result = "NO";

      });
    };

  }
]);
