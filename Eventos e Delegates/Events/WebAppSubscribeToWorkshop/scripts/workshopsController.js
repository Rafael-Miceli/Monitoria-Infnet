(function () {

    var app = angular.module("SubscribeToWorkshop", []);

    var WorkshopsController = function ($scope, workshopService) {

        var onWorkshopsComplete = function (data) {
            $scope.workshops = data;
        };


        var onError = function (reason) {
            $scope.error = "Problemas ao buscar dados do servidor.";
        };


        $scope.loadWorkshops = function () {
            workshopService.getWorkshops().then(onWorkshopsComplete, onError);
        };

    };

    app.controller("WorkshopsController", WorkshopsController);

}());