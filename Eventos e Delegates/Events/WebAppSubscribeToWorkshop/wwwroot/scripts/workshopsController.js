(function () {

    var app = angular.module("SubscribeToWorkshop", []);

    var WorkshopsController = function ($scope, workshopService) {

        var onWorkshopsComplete = function (data) {
            $scope.workshops = data;
        };


        var onError = function (reason) {
            $scope.error = "Problemas ao buscar dados do servidor.";
        };


        loadWorkshops = function () {
            workshopService.getWorkshops().then(onWorkshopsComplete, onError);
        };

        $scope.create = function (workshop) {           

            workshopService.createWorkshop(workshop);
        }

        $scope.name;
        $scope.date;

        loadWorkshops();
    };

    app.controller("WorkshopsController", WorkshopsController);    

}());